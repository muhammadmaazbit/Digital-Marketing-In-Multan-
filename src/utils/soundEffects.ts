/**
 * High-Fidelity Web Audio API Sound Synthesizer for Interactive Soundboard & Lossless Audio Toggle
 * Zero external audio file dependencies, instant zero-latency feedback.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export type SFXType = 'whoosh' | 'sub_drop' | 'riser' | 'impact' | 'film_click' | 'cassette_click' | 'tape_rewind';

export function playSynthesizedSFX(type: SFXType, lossless: boolean = true) {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Simulate bit depth / sample rate filter if not lossless (128kbps simulated via lowpass filter and slight distortion)
    const filter = ctx.createBiquadFilter();
    if (lossless) {
      filter.type = 'allpass';
    } else {
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(11000, now); // standard 128kbps shelf
      filter.Q.setValueAtTime(1.0, now);
    }
    filter.connect(ctx.destination);

    switch (type) {
      case 'whoosh': {
        // High-velocity white noise sweep with bandpass filter
        const bufferSize = ctx.sampleRate * 0.4;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const bpFilter = ctx.createBiquadFilter();
        bpFilter.type = 'bandpass';
        bpFilter.frequency.setValueAtTime(200, now);
        bpFilter.frequency.exponentialRampToValueAtTime(3200, now + 0.2);
        bpFilter.frequency.exponentialRampToValueAtTime(300, now + 0.4);
        bpFilter.Q.setValueAtTime(3, now);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(lossless ? 0.35 : 0.22, now + 0.18);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        noise.connect(bpFilter);
        bpFilter.connect(gain);
        gain.connect(filter);

        noise.start(now);
        noise.stop(now + 0.4);
        break;
      }

      case 'sub_drop': {
        // 808-style deep cinematic sub bass drop
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.exponentialRampToValueAtTime(32, now + 0.65);

        gain.gain.setValueAtTime(lossless ? 0.45 : 0.28, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

        osc.connect(gain);
        gain.connect(filter);

        osc.start(now);
        osc.stop(now + 0.7);
        break;
      }

      case 'riser': {
        // Dramatic cinematic tension riser
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.85);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(lossless ? 0.25 : 0.15, now + 0.75);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.88);

        osc.connect(gain);
        gain.connect(filter);

        osc.start(now);
        osc.stop(now + 0.9);
        break;
      }

      case 'impact': {
        // Heavy cinematic hit + sub tail
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.exponentialRampToValueAtTime(38, now + 0.4);

        gain.gain.setValueAtTime(lossless ? 0.5 : 0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

        // Click transient
        const clickOsc = ctx.createOscillator();
        const clickGain = ctx.createGain();
        clickOsc.type = 'square';
        clickOsc.frequency.setValueAtTime(800, now);
        clickOsc.frequency.exponentialRampToValueAtTime(80, now + 0.05);
        clickGain.gain.setValueAtTime(0.3, now);
        clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        clickOsc.connect(clickGain);
        clickGain.connect(filter);
        clickOsc.start(now);
        clickOsc.stop(now + 0.06);

        osc.connect(gain);
        gain.connect(filter);
        osc.start(now);
        osc.stop(now + 0.55);
        break;
      }

      case 'film_click': {
        // Film splicer / edit cut click
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(2400, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.04);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        osc.connect(gain);
        gain.connect(filter);
        osc.start(now);
        osc.stop(now + 0.05);
        break;
      }

      case 'cassette_click': {
        // Mechanical deck switch
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(240, now + 0.06);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.connect(gain);
        gain.connect(filter);
        osc.start(now);
        osc.stop(now + 0.07);
        break;
      }

      case 'tape_rewind': {
        // Scrubbing rewind effect
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.linearRampToValueAtTime(2200, now + 0.15);
        osc.frequency.linearRampToValueAtTime(400, now + 0.3);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

        osc.connect(gain);
        gain.connect(filter);
        osc.start(now);
        osc.stop(now + 0.35);
        break;
      }
    }
  } catch (err) {
    console.warn('Audio synthesis context error:', err);
  }
}
