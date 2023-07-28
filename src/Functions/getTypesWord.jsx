const getTypesWord = (types) => {
  let typesWord = [];

  for (let type in types) {
    if (types[type]) {
      typesWord.push(type);
    }
  }

  return typesWord;
};

export default getTypesWord;
