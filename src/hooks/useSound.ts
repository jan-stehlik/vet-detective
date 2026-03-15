import { useRef, useCallback } from "react";

type SoundType = "clue" | "correct" | "wrong" | "click" | "levelup";

export function useSound() {
  const ctxRef = useRef<AudioContext | null>(null);

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    if (ctxRef.current.state === "suspended") {
      ctxRef.current.resume();
    }
    return ctxRef.current;
  }, []);

  const playSound = useCallback((type: SoundType) => {
    const ctx = getCtx();
    const now = ctx.currentTime;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    gainNode.gain.setValueAtTime(0.15, now);

    if (type === "clue") {
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(600, now);
      oscillator.frequency.exponentialRampToValueAtTime(900, now + 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      oscillator.start(now);
      oscillator.stop(now + 0.3);
    } else if (type === "correct") {
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(523, now);
      oscillator.frequency.setValueAtTime(659, now + 0.15);
      oscillator.frequency.setValueAtTime(784, now + 0.3);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
      oscillator.start(now);
      oscillator.stop(now + 0.6);
    } else if (type === "wrong") {
      oscillator.type = "sawtooth";
      oscillator.frequency.setValueAtTime(200, now);
      oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.4);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      oscillator.start(now);
      oscillator.stop(now + 0.4);
    } else if (type === "click") {
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(800, now);
      gainNode.gain.setValueAtTime(0.08, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      oscillator.start(now);
      oscillator.stop(now + 0.08);
    } else if (type === "levelup") {
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(440, now);
      oscillator.frequency.setValueAtTime(554, now + 0.12);
      oscillator.frequency.setValueAtTime(659, now + 0.24);
      oscillator.frequency.setValueAtTime(880, now + 0.36);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.7);
      oscillator.start(now);
      oscillator.stop(now + 0.7);
    }
  }, [getCtx]);

  return { playSound };
}
