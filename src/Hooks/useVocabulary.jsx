const useVocabulary = (props) => {
  const getVocabulary = () => {
    const LS = localStorage.getItem("vocabulary");
    let jsonVocabulary = [];

    if (LS != null) {
      jsonVocabulary = JSON.parse(LS);
    }
    return jsonVocabulary;
  };
  const setVocabulary = (data) => {
    localStorage.setItem("vocabulary", JSON.stringify(data));
  };
  return {
    getVocabulary,
    setVocabulary,
  };
};

export default useVocabulary;
