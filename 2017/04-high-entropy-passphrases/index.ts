export function getSortedWord(word: string) {
  const sorted = word
    .split('')
    .sort()
    .join('');
  if (sorted !== word) {
    return sorted;
  }
  return null;
}

export function passphraseValidator(
  phrase: string,
  withAnagramValidation: boolean = false
): boolean {
  let phraseMap = {};
  let phrases = phrase.split(' ');
  while (phrases.length) {
    const latest = phrases.pop();
    const words = [latest]
      .concat(withAnagramValidation ? getSortedWord(latest) : [])
      .filter(word => word && word.length > 0);
    for (let word of words) {
      if (phraseMap[word]) {
        return false;
      }
      phraseMap[word] = true;
    }
  }
  return true;
}

export function getValidPassphrases(
  input: string,
  withAnagramValidation?: boolean
): number {
  return input
    .trim()
    .split('\n')
    .reduce((numValid, phrase) => {
      if (passphraseValidator(phrase, withAnagramValidation)) {
        numValid += 1;
      }
      return numValid;
    }, 0);
}
