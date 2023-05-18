arr = "race";
function palindromeCheck(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return "not a palindrome";
    }
  }
  return "a palindrome";
}
palindromeCheck(arr);
