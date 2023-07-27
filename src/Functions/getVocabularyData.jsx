const getVocabularyData = () => {
  const LS = localStorage.getItem("vocabulary");
  let jsonVocabulary = [];

  if (LS != null) {
    jsonVocabulary = JSON.parse(LS);
  }
  return jsonVocabulary;
};

export default getVocabularyData;
