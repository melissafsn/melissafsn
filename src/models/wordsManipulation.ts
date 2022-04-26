import {Words} from "./words";

export class WordsManipulation extends Words{
  public get allWords(): string[] {
    return this.answers;
  }

  public getNextWord(isInfinite: boolean = false) {
    const now = new Date()
    const start = new Date(2022, 0, 0)
    const diff = Number(now) - Number(start)
    let day = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (isInfinite) {
      this.shuffle()
    }

    while (day > this.answers.length) {
      day -= this.answers.length
    }

    return this.answers[day].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  }
}
