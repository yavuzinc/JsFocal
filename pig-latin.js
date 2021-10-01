var words = process.argv.slice(2);
var lastWord = words[words.length - 1];
var pigged = "";

function pigTranslator(word) {
  var piggedCom = "";
  for (var i = 1; i < word.length; i++) {
    piggedCom += word[i];
  }
  piggedCom += word[0];
  return piggedCom += word == lastWord ? "ay" : "ay "
}
words.forEach(function(word) {
  pigged += pigTranslator(word);
});
console.log(pigged);