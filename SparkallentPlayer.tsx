import React, { useState, useRef, useEffect } from "react";
import { Play, Square, Volume2, Music, VolumeX, Sparkles, Zap } from "lucide-react";

export default function SparkallentPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [mute, setMute] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const tracks = [
    {
      title: "Ambinix Theme (Cosmic AI)",
      type: "synth-drone",
      frequencies: [110, 220, 330, 440],
      desc: "Deep atmospheric synthesizer sound mapping advanced machine consciousness.",
      waveType: "sine" as OscillatorType
    },
    {
      title: "AIAOBI National Anthem (Academic Resonance)",
      type: "chord",
      frequencies: [130.81, 196.00, 261.63, 329.63], // C3, G3, C4, E4
      desc: "Harmonious scientific organ resonance symbolizing growth and national structure.",
      waveType: "triangle" as OscillatorType
    },
    {
      title: "Sparkallent Spatial Signature Logo",
      type: "spatial",
      frequencies: [80, 160, 240, 320, 480],
      desc: "An acoustic brand signature designed for cinematic executive impact.",
      waveType: "sawtooth" as OscillatorType
    }
  ];

  // Canvas visualizer simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.parentElement?.clientWidth || 400;
    let height = canvas.height = 120;

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        width = canvas.width;
      }
    };
    window.addEventListener("resize", handleResize);

    let phase = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Background grid line
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      if (isPlaying) {
        phase += 0.05;
        const activeTrack = tracks[selectedTrack];
        const numWaves = activeTrack.frequencies.length;

        // Draw multiple overlapping colored sine/saw/triangle waves
        for (let w = 0; w < numWaves; w++) {
          ctx.beginPath();
          ctx.lineWidth = w === 0 ? 3 : 1.5;
          
          // Color based on active wave and track index
          const hue = (selectedTrack * 120 + w * 40) % 360;
          ctx.strokeStyle = `hsla(${hue}, 80%, 65%, ${w === 0 ? 0.8 : 0.4})`;

          for (let x = 0; x < width; x++) {
            const frequencyFactor = (w + 1) * 0.01;
            const amplitude = (height / 3.5) * (1 / (w + 1)) * (mute ? 0.05 : 1);
            let y = height / 2;

            if (activeTrack.waveType === "sine") {
              y += Math.sin(x * frequencyFactor + phase) * amplitude;
            } else if (activeTrack.waveType === "triangle") {
              // Simulated triangle wave
              y += Math.asin(Math.sin(x * frequencyFactor + phase)) * (2 / Math.PI) * amplitude;
            } else {
              // Simulated sawtooth wave
              y += (2 * (x * frequencyFactor + phase - Math.floor(x * frequencyFactor + phase + 0.5))) * amplitude;
            }

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        // Animated particles along the wave
        for (let i = 0; i < 5; i++) {
          const px = (phase * 150 + i * (width / 5)) % width;
          const py = height / 2 + Math.sin(px * 0.015 + phase) * (height / 5);
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        // Flat line idle state
        ctx.strokeStyle = "rgba(120, 120, 120, 0.3)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x < width; x++) {
          const y = height / 2 + Math.sin(x * 0.05) * (Math.sin(phase) * 0.5);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        phase += 0.01;
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying, selectedTrack, mute]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const startAudio = () => {
    try {
      stopAudio();

      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) {
        alert("Web Audio API is not supported in this browser.");
        return;
      }

      const audioCtx = new AudioContextClass();
      audioCtxRef.current = audioCtx;

      const mainGain = audioCtx.createGain();
      mainGain.gain.setValueAtTime(mute ? 0 : 0.15, audioCtx.currentTime);
      mainGain.connect(audioCtx.destination);
      gainNodeRef.current = mainGain;

      const track = tracks[selectedTrack];

      // Create multiple oscillators for rich chords/spatial effects
      track.frequencies.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        osc.type = track.waveType;
        
        // Add tiny detune for analog richness
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        osc.detune.setValueAtTime((idx - 1) * 8, audioCtx.currentTime);

        const oscGain = audioCtx.createGain();
        // Lower volume for higher harmonics
        const volumeFactor = 1 / (idx + 1);
        oscGain.gain.setValueAtTime(volumeFactor, audioCtx.currentTime);

        // Low frequency oscillator (LFO) for volume modulation (drone effect)
        const lfo = audioCtx.createOscillator();
        lfo.type = "sine";
        lfo.frequency.setValueAtTime(0.2 + idx * 0.1, audioCtx.currentTime); // very slow tremolo
        
        const lfoGain = audioCtx.createGain();
        lfoGain.gain.setValueAtTime(0.3, audioCtx.currentTime);

        lfo.connect(lfoGain);
        lfoGain.connect(oscGain.gain); // modulate individual volume

        osc.connect(oscGain);
        oscGain.connect(mainGain);

        osc.start();
        lfo.start();

        oscillatorsRef.current.push(osc);
        // also store lfo to release
        oscillatorsRef.current.push(lfo);
      });

      setIsPlaying(true);
    } catch (err) {
      console.error("Failed to start synthesizer audio:", err);
    }
  };

  const stopAudio = () => {
    if (oscillatorsRef.current.length > 0) {
      oscillatorsRef.current.forEach(osc => {
        try {
          osc.stop();
        } catch (e) {}
      });
      oscillatorsRef.current = [];
    }
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.close();
      } catch (e) {}
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const changeTrack = (idx: number) => {
    setSelectedTrack(idx);
    if (isPlaying) {
      // Restart with new frequencies/chord settings
      setTimeout(() => {
        startAudio();
      }, 50);
    }
  };

  const toggleMute = () => {
    const nextMute = !mute;
    setMute(nextMute);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(nextMute ? 0 : 0.15, audioCtxRef.current.currentTime);
    }
  };

  return (
    <div id="sparkallent-player" className="border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white p-6 rounded-xl shadow-xl transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-neutral-900 dark:bg-neutral-900 light:bg-zinc-100 rounded-lg text-white dark:text-white light:text-zinc-800">
            <Music className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm tracking-wide text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
              SPARKALLENT BRAND SONICS
            </h4>
            <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-mono">
              Acoustic Brand Curation & Synthesizers
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-100 text-[10px] font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-600 border border-zinc-700/50">
            <Sparkles className="w-3 h-3 text-amber-400" />
            SYNTH AUDIO
          </span>
        </div>
      </div>

      {/* Visualizer Frame */}
      <div className="relative bg-black rounded-lg overflow-hidden border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 mb-6 flex flex-col justify-between">
        <canvas ref={canvasRef} className="w-full block" />
        <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-md py-1 px-2.5 rounded text-[10px] font-mono text-zinc-400 tracking-wider">
          <div className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-green-500 animate-ping" : "bg-neutral-600"}`} />
          {isPlaying ? "LIVE ANALYZER STREAM" : "SYNTH IDLE"}
        </div>
        <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-md py-1 px-2.5 rounded text-[10px] font-mono text-zinc-400">
          MODE: {tracks[selectedTrack].waveType.toUpperCase()}
        </div>
      </div>

      {/* Track Selection Grid */}
      <div className="space-y-2 mb-6">
        <span className="text-[10px] font-mono text-zinc-500 tracking-wider block mb-2 uppercase">
          Select Acoustic Identity Pattern:
        </span>
        <div className="grid grid-cols-1 gap-2">
          {tracks.map((track, idx) => (
            <button
              key={idx}
              id={`track-${idx}`}
              onClick={() => changeTrack(idx)}
              className={`text-left p-3 rounded-lg border transition-all flex items-start gap-3 ${
                selectedTrack === idx
                  ? "bg-zinc-800/80 dark:bg-zinc-800/80 light:bg-zinc-100 border-zinc-600 dark:border-zinc-600 light:border-zinc-300"
                  : "bg-transparent border-zinc-800 dark:border-zinc-800 light:border-zinc-200 hover:bg-zinc-800/20 dark:hover:bg-zinc-800/20 light:hover:bg-zinc-50"
              }`}
            >
              <div className={`p-1.5 rounded-md mt-0.5 ${selectedTrack === idx ? "bg-white text-zinc-950" : "bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-100 text-zinc-400"}`}>
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h5 className="font-display font-medium text-xs text-zinc-200 dark:text-zinc-200 light:text-zinc-900 truncate">
                    {track.title}
                  </h5>
                  {selectedTrack === idx && isPlaying && (
                    <span className="text-[10px] text-green-400 font-mono">ACTIVE</span>
                  )}
                </div>
                <p className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mt-1 line-clamp-1">
                  {track.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Primary Controls */}
      <div className="flex items-center justify-between border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200 pt-4">
        <div className="flex items-center gap-3">
          <button
            id="play-button"
            onClick={togglePlayback}
            className={`flex items-center gap-2 py-2 px-5 rounded-full font-display font-semibold text-xs tracking-wide transition-all ${
              isPlaying
                ? "bg-amber-500 hover:bg-amber-600 text-neutral-950"
                : "bg-white hover:bg-zinc-200 text-zinc-950"
            }`}
          >
            {isPlaying ? (
              <>
                <Square className="w-3.5 h-3.5 fill-current" />
                STOP SONIC DRIFT
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                PLAY SONIC CONCEPT
              </>
            )}
          </button>
        </div>

        <button
          id="mute-button"
          onClick={toggleMute}
          className="p-2.5 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-800 light:hover:bg-zinc-100 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 transition-all border border-zinc-800 dark:border-zinc-800 light:border-zinc-200"
          title={mute ? "Unmute" : "Mute"}
        >
          {mute ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      <p className="text-[9px] text-zinc-500 dark:text-zinc-500 light:text-zinc-400 text-center mt-4 leading-relaxed">
        *Audio generated synthetically in your browser using standard Web Audio oscillators to guarantee lightning-fast performance without external network downloads.
      </p>
    </div>
  );
}
