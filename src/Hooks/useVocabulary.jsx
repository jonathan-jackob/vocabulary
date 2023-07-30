import React, { useState } from "react";
import ordenarAsc from "../Functions/ordenarAsc";
import useLocalStorage from "./useLocalStorage";
import useResponse from "./useResponse";

const useVocabulary = () => {
  const formInit = {
    id: "",
    word: "",
    spanish: "",
    pronounce: "",
    examples: [""],
    types: {
      /**si se agrega otro type, agregar color @see src/Theme/TypesColors.jsx */
      adjetive: false,
      adverb: false,
      noun: false,
      preposition: false,
      verb: false,
      word: false,
    },
    image: "",
    comment: "",
  };
  const vocabulary = useLocalStorage("vocabulary");
  const response = useResponse();
  const [data, setData] = useState(formInit);

  // getters
  const getId = () => data.id;
  const getWord = () => data.word;
  const getSpanish = () => data.spanish;
  const getPronounce = () => data.pronounce;
  const getImage = () => data.image;
  const getComment = () => data.comment;
  const getType = (type) => data.types[type];
  const getTypes = () => {
    return { ...formInit.types, ...data.types };
  };
  const getExample = (key) => data.examples[key];
  const getExamples = () => data.examples;
  // setters
  const setId = (id) => {
    setData({ ...data, id });
  };
  const setWord = (word) => {
    setData({ ...data, word });
  };
  const setSpanish = (spanish) => {
    setData({ ...data, spanish });
  };
  const setPronounce = (pronounce) => {
    setData({ ...data, pronounce });
  };
  const setImage = (image) => {
    setData({ ...data, image });
  };
  const setComment = (comment) => {
    setData({ ...data, comment });
  };
  const setExamples = (examples) => {
    setData({ ...data, examples });
  };
  const setType = (type, value) => {
    if (type in data.types) {
      let objTempo = {};
      objTempo[type] = value;
      setData({ ...data, types: { ...data.types, ...objTempo } });
    }
  };
  const setAllData = (data) => {
    const types =
      typeof data.types == "object"
        ? { ...formInit.types, ...data.types }
        : { ...formInit.types };
    setData({ ...formInit, ...data, types });
  };

  // functions
  const editExample = (example, key) => {
    let examples = [...data.examples];
    examples[key] = example;

    setData({
      ...data,
      /**los examples siempre deben contener un elemento vacío,
       * se filtra y se eliminan todos y se agrega uno al final */
      examples: [...examples.filter((item) => item.trim() !== ""), ""],
    });
  };

  const clean = () => {
    setData(formInit);
  };

  const formValidate = () => {
    // validación de word requerido
    if (data.word.trim() === "") {
      return response.error("Se requiere agregar una palabra.");
    }
    return response.success();
  };

  const saveEdit = () => {
    const errors = formValidate(); // validaciones antes de guardar información

    if (errors.error) {
      return errors;
    }

    let jsonTempo = vocabulary.getDataJSON(); // recuperamos información de local
    let jsonVocabulary = jsonTempo.map(
      (form) => (data.id == form.id ? data : form) // actualizamos información del item modificado
    );

    ordenarAsc(jsonVocabulary, "word"); // se orden a la información de a-z
    vocabulary.setDataJSON(jsonVocabulary); // guardamos la información en local

    return response.success();
  };

  const saveAdd = () => {
    const errors = formValidate(); // validaciones antes de guardar información

    if (errors.error) {
      return errors;
    }

    let jsonVocabulary = vocabulary.getDataJSON(); // recuperamos información de local
    const id = Date.now(); // creamos id
    jsonVocabulary.push({ ...data, id }); // agregamos nuevo item
    ordenarAsc(jsonVocabulary, "word"); // se orden a la información de a-z
    vocabulary.setDataJSON(jsonVocabulary); // guardamos la información en local

    return response.success();
  };

  const deleteItem = (id) => {
    try {
      let arrVocabulary = vocabulary.getDataJSON(); // recuperamos información de local
      const filter = arrVocabulary.filter((item) => {
        return item.id !== id; //  retornamos solo los que sean diferentes
      });
      vocabulary.setDataJSON(filter); // guardamos la información en local
      return response.success();
    } catch (error) {
      console.error(error);
      return response.error("Ocurrió un error, inténtelo mas tarde");
    }
  };

  return {
    data,
    formInit,
    saveEdit,
    saveAdd,
    deleteItem,
    editExample,
    getComment,
    getExample,
    getExamples,
    getId,
    getImage,
    getType,
    getTypes,
    getPronounce,
    getSpanish,
    getWord,
    setAllData,
    setComment,
    setExamples,
    setId,
    setImage,
    setPronounce,
    setSpanish,
    setType,
    setWord,
    clean,
  };
};

export default useVocabulary;
