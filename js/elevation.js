import Tone from 'tone';

export default class Elevation {
  constructor() {
    Tone.Transport.start()
    this.noise = new Tone.NoiseSynth({envelope: {attack: 1, sustain: 1, release: 1}});
    this.filter = new Tone.Filter({type: 'lowpass', frequency: 0, Q: 20}).toMaster();
    this.noise.connect(this.filter);
  }

  play() {
    this.noise.triggerAttack();
  }

  update(elevation) {
    this.filter.frequency.value = elevation + 50
  }

  stop() {
    this.noise.triggerRelease();
  }
}
