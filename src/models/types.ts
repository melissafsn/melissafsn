export const enum LetterState {
  INITIAL = 0,
  CORRECT = 'correct',
  PRESENT = 'present',
  ABSENT = 'absent'
}

export const enum LocalStorageKey {
  BOARD = "board",
  IS_INFINITE = "isInfinite",
  ANSWER = "answer",
  SCORE = "score",
  LETTER_STATE = "letterState"
}

export const icons = {
  [LetterState.CORRECT]: '🟩',
  [LetterState.PRESENT]: '🟨',
  [LetterState.ABSENT]: '⬜',
  [LetterState.INITIAL]: ''
}

export type Score = {label: string, value: number}

export interface LocalStorage {
  put(key: string, values: any, raw: boolean): any;
  get(key: string, defaultValue: any, raw: boolean): any;
  remove(key: string): void;
  has(key: string): boolean;
}
