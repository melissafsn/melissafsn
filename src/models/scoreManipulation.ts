import {LocalStorageKey, Score} from "./types";
import {LocalStorageManipulation} from "./localStorageManipulation";

export default class ScoreManipulation{
  private localStorageManipulation: LocalStorageManipulation;

  constructor() {
    this.localStorageManipulation = new LocalStorageManipulation()
  }

  get(): Score[]{
    return this.localStorageManipulation.get(LocalStorageKey.SCORE, Array.from({ length: 6 }).map((_, it) => ({label: `${it + 1}/6`, value: 0}))) as Score[];
  }

  put(currentScore: number) {
    const score = this.get();
    score[currentScore].value++;
    this.localStorageManipulation.put(LocalStorageKey.SCORE, score)
  }

  get total(): number {
    return this.get().reduce((prev, current) => current.value + prev, 0);
  }
}
