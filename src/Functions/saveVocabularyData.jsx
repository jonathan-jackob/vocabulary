/**
 * Guarda lo recibido en localStorage en el item "vocabulary"
 * @param {array} data
 */
const saveVocabularyData = (data) => {
  localStorage.setItem("vocabulary", JSON.stringify(data));
};

export default saveVocabularyData;
