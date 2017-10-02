import Teoria from 'teoria';

export default class Scale {
  constructor() {
    this.notes = Teoria.scale("C", "major").notes().map(note => note.toString());
  }

  update(location) {
    let notes = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B"
    ]

    let scales = [
      "major",
      "minor",
      "dorian",
      "phrygian",
      "lydian",
      "mixolydian",
      "locrian",
      "harmonicminor",
      "melodicminor"
    ]

    let note = notes[Math.abs(Math.round(location.longitude % 12))]
    let scale = scales[Math.abs(Math.round(location.latitude / 10) % 9)]

    this.notes = Teoria.scale(note, scale).notes().map(note => note.toString());
  }
}
