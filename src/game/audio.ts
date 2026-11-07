type SoundName = 'attack'|'power'|'impact'|'hit'|'jump'|'ally'|'win'|'coin'|'defeat'|'land'|'unlock'|'ui'|'checkpoint';

/** Tiny synthesized sound layer: no remote media, files, or network dependency. */
class ManatiAudio {
  private context: AudioContext | null = null;
  private musicTimer: number | null = null;
  private musicOn = false;
  private musicVolume = .18;
  private effectsVolume = .48;
  private noteIndex = 0;
  private lastSound: Partial<Record<SoundName, number>> = {};
  private readonly phrases = [
    [261.6, 392, 329.6, 523.3, 392, 293.7, 440, 349.2],
    [220, 329.6, 277.2, 440, 329.6, 246.9, 370, 293.7],
    [293.7, 440, 349.2, 523.3, 392, 329.6, 493.9, 392],
  ];

  private getContext() {
    if (!this.context) {
      const Ctx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctx) return null;
      this.context = new Ctx();
    }
    if (this.context.state === 'suspended') void this.context.resume();
    return this.context;
  }

  setMusicVolume(value: number) { this.musicVolume = Math.max(0, Math.min(1, value)); }
  setEffectsVolume(value: number) { this.effectsVolume = Math.max(0, Math.min(1, value)); }

  startMusic() {
    this.musicOn = true;
    this.playNextNote();
  }

  pauseMusic() {
    this.musicOn = false;
    if (this.musicTimer !== null) window.clearTimeout(this.musicTimer);
    this.musicTimer = null;
  }

  resumeMusic() {
    if (this.musicOn) return;
    this.musicOn = true;
    this.playNextNote();
  }

  private tone(frequency: number, duration: number, volume: number, wave: OscillatorType = 'sine', delay = 0) {
    const ctx = this.getContext();
    if (!ctx || volume <= 0) return;
    const start = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = wave;
    osc.frequency.setValueAtTime(frequency, start);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(Math.min(2600, frequency * 5), start);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(Math.max(.0002, volume), start + .018);
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    osc.connect(filter).connect(gain).connect(ctx.destination);
    osc.start(start);
    osc.stop(start + duration + .025);
  }

  private playNextNote() {
    if (!this.musicOn) return;
    const phrase = this.phrases[Math.floor(this.noteIndex / 8) % this.phrases.length];
    const note = phrase[this.noteIndex % phrase.length];
    const variation = [1, 1.25, .75, 1.5][Math.floor(Math.random() * 4)];
    this.tone(note * variation, .42 + Math.random() * .25, this.musicVolume * .11, 'sine');
    if (this.noteIndex % 4 === 0) this.tone(note / 2, .95, this.musicVolume * .07, 'triangle', .03);
    this.noteIndex++;
    this.musicTimer = window.setTimeout(() => this.playNextNote(), 470 + Math.random() * 290);
  }

  play(name: SoundName) {
    const now = performance.now();
    const limit: Partial<Record<SoundName, number>> = { attack: 90, impact: 55, jump: 110, coin: 65, land: 100, defeat: 70 };
    if (limit[name] && now - (this.lastSound[name] ?? 0) < limit[name]!) return;
    this.lastSound[name] = now;
    const v = this.effectsVolume;
    switch (name) {
      case 'attack': this.tone(540, .09, v * .15, 'square'); this.tone(760, .065, v * .1, 'triangle', .025); break;
      case 'power': this.tone(260, .22, v * .25, 'sawtooth'); this.tone(620, .26, v * .22, 'sine', .05); break;
      case 'impact': this.tone(145, .1, v * .28, 'triangle'); this.tone(92, .13, v * .16, 'sine', .025); break;
      case 'hit': this.tone(110, .22, v * .32, 'sawtooth'); this.tone(72, .28, v * .22, 'triangle', .035); break;
      case 'jump': this.tone(360, .12, v * .16, 'sine'); this.tone(510, .16, v * .12, 'triangle', .04); break;
      case 'ally': this.tone(480, .12, v * .2, 'triangle'); this.tone(720, .19, v * .18, 'sine', .07); break;
      case 'coin': this.tone(880,.07,v*.22,'sine');this.tone(1320,.12,v*.16,'triangle',.045);break;
      case 'land': this.tone(105,.09,v*.17,'triangle');this.tone(170,.06,v*.08,'sine',.02);break;
      case 'defeat': this.tone(330,.12,v*.18,'triangle');this.tone(220,.16,v*.13,'sine',.05);break;
      case 'unlock': [587.3,784,987.8].forEach((n,i)=>this.tone(n,.22,v*.18,'triangle',i*.075));break;
      case 'ui': this.tone(620,.07,v*.12,'sine');break;
      case 'checkpoint': this.tone(520,.12,v*.16,'triangle');this.tone(780,.18,v*.15,'sine',.06);break;
      case 'win': [523.3, 659.3, 784, 1046.5].forEach((n, i) => this.tone(n, .38, v * .22, 'triangle', i * .11)); break;
    }
  }
}

export const gameAudio = new ManatiAudio();
