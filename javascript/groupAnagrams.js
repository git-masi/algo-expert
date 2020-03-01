/**
 * ====
 * IOEA
 * ====
 * Input: an array of strings
 * Output: an array of arrays representing groups of anagrams
 * Assumptions:
 *    no particular order for anagram groups
 *    no empty arrays
 * Edge cases:
 *    strings where none are anagrams of each other
 *    e.g. 'abc', 'fed', 'lork' => [['abc'], ['fed'], ['lork']]
 *    empty strings
 *    e.g. '' => [['']]
 *    single characters
 *    e.g. 'a' => [['a']]
 *
 *
 * ===========================
 * THOUGHTS PRE-IMPLEMENTATION
 * ===========================
 * The brute force solution would be to generate every anagram of each input string
 * and check if the other input strings match
 *
 * A better solution would be to iterate over each input string and generate a hash table for character frequency
 * Then for subseqent words see if their character freqency tables match
 *
 *
 */

function groupAnagrams(words) {
  const groups = [];
  const hashTable = new Map;
  let tempObj, anagram, added;

  for (let word of words) {
    tempObj = makeCharFreqObject(word);
    anagram = null;

    for (let entry of hashTable) {
      if (entry[0].length === word.length) {
        let addAnagram = true;
        for (let char in entry[1]) {
          if (entry[1][char] !== tempObj[char]) {
            addAnagram = false;
            break;
          }
        }
        if (addAnagram) anagram = entry[0];
      }
      if (anagram !== null) break;
    }

    if (anagram !== null) {
      added = false;
      for (let group of groups) {
        if (group.includes(anagram)) {
          group.push(word);
          added = true;
          break;
        }
      }

      if (!added) {
        groups.push([anagram, word]);
      }
    } else {
      groups.push([word]);
      hashTable.set(word, tempObj);
    }
  }

  return groups;
}

function makeCharFreqObject(str) {
  const charFreq = {};

  for (let char of str) {
    if (!charFreq[char]) {
      charFreq[char] = 1;
    } else {
      charFreq[char] += 1;
    }
  }

  return charFreq;
}