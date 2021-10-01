const joinList = function(conceptList) {
    let addStrings = "";
    for (let i = 0; i < conceptList.length; i++) {
      const word = conceptList[i];
      console.log(i, conceptList.length);
      if (i < conceptList.length - 1) {
        addStrings += word.toString() + ", ";
      } else {
        addStrings += word.toString() + "";
      }
    }
    return addStrings;
  };
  
  // Test / Driver Code below...
  const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
  const concepts = joinList(conceptList);
  console.log(`Today I learned about ${concepts}.`);