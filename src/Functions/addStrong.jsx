const addStrong = (text, wordInText, wordInWords = false) => {
  const wordInTextArray = String(wordInText).replace(/ /g, "").split(",");
  let indexB = wordInTextArray.indexOf("b");

  if (indexB >= 0) {
    const backup = wordInTextArray[indexB];
    wordInTextArray.splice(indexB, 1);
    wordInTextArray.unshift(backup);
  }

  indexB = wordInTextArray.indexOf("B");
  if (indexB >= 0) {
    const backup = wordInTextArray[indexB];
    wordInTextArray.splice(indexB, 1);
    wordInTextArray.unshift(backup);
  }

  wordInTextArray.forEach((word) => {
    const regexp = new RegExp(
      wordInWords ? word : `\\b(?<!\\w)${word}(?!\\w)\\b`,
      "gi"
    );

    text = String(text).replace(regexp, `<b>${word}</b>`);
  });

  return text;
};

export default addStrong;
