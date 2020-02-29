function longestPalindromicSubstring(str) {
  let longest = '';
  let left, right, temp;

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j <= i + 1; j++) {
      left = i;
      right = j;

      while (left >= 0 && str[left] === str[right]) {
        temp = str.slice(left, right + 1);
        if (temp.length > longest.length) longest = temp;
        left--;
        right++;
      }
    }
  }

  return longest;
}

// Time complexity: O(n^2)
// Space complexity: O(n)
// look into manacher's algorithm for