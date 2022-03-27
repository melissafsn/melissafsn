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
  LETTER_STATE = "letterState"
}

export const icons = {
  [LetterState.CORRECT]: '🟩',
  [LetterState.PRESENT]: '🟨',
  [LetterState.ABSENT]: '⬜',
  [LetterState.INITIAL]: ''
}