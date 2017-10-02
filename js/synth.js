import Tone from 'tone';
import Scale from './scale';
import Elevation from './elevation';
import Biome from './biome';

export default class Synth {
  constructor() {
    this.scale = new Scale();

    this.reverb = new Tone.Freeverb(0.8, 4000).receive('reverb').toMaster();
    this.elevation = new Elevation();
    this.biome = new Biome(this.scale);
    this.playing = false;
  }

  parse(data) {
    this.scale.update(data.location);
    this.elevation.update(data.statistics.elevation.value);
    this.biome.update(data.statistics.mean_temperature.value, data.statistics.precipitation.value);
    if (!this.playing) {this.play();}
  }

  play() {
    this.playing = true;
    this.elevation.play()
    this.biome.play()
  }
}
