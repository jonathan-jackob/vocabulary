/**
 * obtiene los registros del localStorage guardados en el item "vocabulary"
 * @returns array
 */
const getVocabularyData = () => {
  const LS = localStorage.getItem("vocabulary");
  let jsonVocabulary = [];

  if (LS != null) {
    jsonVocabulary = JSON.parse(LS);
  }
  return jsonVocabulary;
};

export default getVocabularyData;
