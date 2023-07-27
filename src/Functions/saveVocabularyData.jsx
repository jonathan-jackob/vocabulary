const saveVocabularyData = (data) => {
  localStorage.setItem("vocabulary", JSON.stringify(data));
};

export default saveVocabularyData;
