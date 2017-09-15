import Tone from 'tone';

export default class Synth {
  constructor(data) {
    this.parse(data)
    this.drone = new Tone.Synth().toMaster();
  }

  parse(data) {
  }

  play() {
  }
}
