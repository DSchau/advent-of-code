export function getSortedWord(word: string): string | null {
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
  const phrases = phrase.split(' ')
    .reduce((all, phrase) => {
      return all.concat([phrase].concat(withAnagramValidation ? getSortedWord(phrase) || [] : []));
    }, []);
  const uniquePhrases = new Set(phrases);
  if (uniquePhrases.size !== phrases.length) {
    return false;
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
