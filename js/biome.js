import Tone from 'tone';

export default class Biome {
  constructor(scale) {
    this.scale = scale
    this.filter = new Tone.Filter({ type: "bandpass",
                                    Q: 10 }).toMaster();
    this.distortion = new Tone.Distortion().connect(this.filter)
    window.dist = this.distortion

    this.synth = new Tone.Synth().connect(this.distortion)
    this.synth.volume.value = -25;

    this.arp = new Tone.Pattern((time, note) => {
      this.synth.triggerAttackRelease(note, time);
    }, this.scale.notes, "random");
    this.arp.interval = "1m"
  }

  update(temp, precip) {
    this.arp.values = this.scale.notes
    console.log(this.scale.notes)

    this.distortion.distortion = Math.max(...temp) - Math.min(...temp);
    let avgTemp = temp.reduce((acc, current) => (acc + current)) / temp.length;
    this.filter.frequency.value = avgTemp * 100 + 100
  }

  play() {
    this.arp.start();
  }
}
