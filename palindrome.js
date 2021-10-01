// FUNCTION IMPLEMENTATION (MULTIPLE BUGS)
const isPalindrome = function(str) {
  str = str.replace(/\s/g, ''); // removed spaces
  const noSpaces = str.split("").join("");
  const midIndex = Math.floor(noSpaces.length / 2);
  const lastIndex = noSpaces.length - 1;
  for (let z = 0; z < str.length ; z++){
    str.toLowerCase();
  }
  for (let i = 0; i < midIndex; i++) {
    
    if (str[i] !== str[lastIndex - i]) return false;
  }
};

// Assertion Function
const assertPalindrome = function(word, expected) {
 
  console.log(`Testing isPalindrome(\"${word}\"):`);
  
  const actual = isPalindrome(word.toLowerCase()); // lowered case
  if (actual !== expected) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ function returned ${expe}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 function returned ${actual} (expected ${expected})\n`);
  }
};


// TEST CODE
// These should all pass assertion, but they don't.
assertPalindrome('p', true);
assertPalindrome('racecar', true);
assertPalindrome('my gym', true);
assertPalindrome('foo', false);
assertPalindrome('fluff', false);
assertPalindrome('just some random words', false);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
 assertPalindrome('Kayak', true);
 assertPalindrome('a santa at NASA', true);