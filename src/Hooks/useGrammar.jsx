import React, { useState } from "react";
import useResponse from "./useResponse";

const useGrammar = () => {
  const formInit = {
    description: "",
    examples: [""],
    keywords: "",
    title: "",
  };
  const grammar = useLocalStorage("grammar");
  const response = useResponse();
  const [data, setData] = useState(formInit);

  const getDescription = () => data.description;
  const getExample = (key) => data.examples[key];
  const getExamples = () => data.examples;
  const getKeywords = () => data.keywords;
  const getTitle = () => data.title;

  const setAllData = (data) => {
    setData({ ...formInit, ...data });
  };
  const setDescription = (description) => {
    setData({ ...data, description });
  };
  const setExamples = (examples) => {
    setData({ ...data, examples });
  };
  const setKeywords = (keywords) => {
    setData({ ...data, keywords });
  };
  const setTitle = (title) => {
    setData({ ...data, title });
  };

  const formValidate = () => {
    // validación de titulo requerido
    if (data.title.trim() === "") {
      return response.error("Se requiere agregar un titulo.");
    }
    return response.success();
  };

  const saveEdit = () => {
    const errors = formValidate(); // validaciones antes de guardar información

    if (errors.error) {
      return errors;
    }

    const jsonTempo = grammar.getDataJSON(); // recuperamos información de local
    let jsonGrammar = jsonTempo.map(
      (form) => (data.id == form.id ? data : form) // actualizamos información del item modificado
    );
    ordenarAsc(jsonGrammar, "title"); // se orden a la información de a-z
    grammar.setDataJSON(jsonGrammar); // guardamos la información en local

    return response.success();
  };

  const saveAdd = () => {
    const errors = formValidate(); // validaciones antes de guardar información

    if (errors.error) {
      return errors;
    }

    let jsonVocabulary = grammar.getDataJSON(); // recuperamos información de local
    const id = Date.now(); // creamos id
    jsonVocabulary.push({ ...data, id }); // agregamos nuevo item
    ordenarAsc(jsonVocabulary, "word"); // se orden a la información de a-z
    grammar.setDataJSON(jsonVocabulary); // guardamos la información en local
    return response.success();
  };

  const deleteItem = (id) => {
    try {
      let arrVocabulary = grammar.getDataJSON(); // recuperamos información de local
      const filter = arrVocabulary.filter((item) => {
        return item.id !== id; //  retornamos solo los que sean diferentes
      });
      grammar.setDataJSON(filter); // guardamos la información en local
      return response.success();
    } catch (error) {
      console.error(error);
      return response.error("Ocurrió un error, inténtelo mas tarde");
    }
  };

  return {
    formInit,
    saveAdd,
    saveEdit,
    deleteItem,
    getDescription,
    getExample,
    getExamples,
    getKeywords,
    getTitle,
    setAllData,
    setDescription,
    setExamples,
    setKeywords,
    setTitle,
  };
};

export default useGrammar;
