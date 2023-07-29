import React, { useState } from "react";
import ordenarAsc from "@Functions/ordenarAsc";
import useVocabulary from "./useVocabulary";

const useForm = () => {
  const formInit = {
    id: "",
    word: "",
    spanish: "",
    pronounce: "",
    examples: [""],
    types: {
      noun: false,
      verb: false,
      adjetive: false,
      preposition: false,
      adverb: false,
    },
    image: "",
    comment: "",
  };
  const vocabulary = useVocabulary();
  const [data, setData] = useState(formInit);

  const getId = () => data.id;
  const getWord = () => data.word;
  const getSpanish = () => data.spanish;
  const getPronounce = () => data.pronounce;
  const getImage = () => data.image;
  const getComment = () => data.comment;
  const getType = (type) => data.types[type];
  const getExample = (key) => data.examples[key];
  const getExamples = () => data.examples;

  const setId = (value) => {
    setData({ ...data, id: value });
  };
  const setWord = (value) => {
    setData({ ...data, word: value });
  };
  const setSpanish = (value) => {
    setData({ ...data, spanish: value });
  };
  const setPronounce = (value) => {
    setData({ ...data, pronounce: value });
  };
  const setImage = (value) => {
    setData({ ...data, image: value });
  };
  const setComment = (value) => {
    setData({ ...data, comment: value });
  };
  const setType = (type, value) => {
    switch (type) {
      case "noun":
        setData({ ...data, types: { ...data.types, noun: value } });
        break;
      case "verb":
        setData({ ...data, types: { ...data.types, verb: value } });
        break;
      case "adjetive":
        setData({ ...data, types: { ...data.types, adjetive: value } });
        break;
      case "preposition":
        setData({ ...data, types: { ...data.types, preposition: value } });
        break;
      case "adverb":
        setData({ ...data, types: { ...data.types, adverb: value } });
        break;
    }
  };

  const setAllData = (data) => {
    setData({ ...formInit, ...data });
  };

  const editExample = (example, key) => {
    let examples = [...data.examples];
    examples[key] = example;

    setData({
      ...data,
      examples: [...examples.filter((item) => item.trim() !== ""), ""],
    });
  };

  const setExamples = (examples) => {
    setData({ ...data, examples: examples });
  };

  const responseSuccess = () => ({
    error: false,
    success: true,
    message: "",
  });
  const responseError = (message = "Error") => ({
    error: true,
    success: false,
    message,
  });

  const clean = () => {
    setData(formInit);
  };
  const formValidate = () => {
    if (data.word.trim() === "") {
      return responseError("Se requiere agregar una palabra.");
    }
    return responseSuccess();
  };

  const saveEdit = () => {
    // seccion de validaciones necesarias antes de guardar información
    const errors = formValidate();

    if (errors.error) {
      return errors;
    }

    let jsonTempo = vocabulary.getVocabulary(); // recuperamos informacion de local
    let jsonVocabulary = jsonTempo.map((form) =>
      data.id == form.id ? data : form
    );

    ordenarAsc(jsonVocabulary, "word");
    vocabulary.setVocabulary(jsonVocabulary);

    return responseSuccess();
  };

  const saveAdd = () => {
    // seccion de validaciones necesarias antes de guardar información
    const errors = formValidate();

    if (errors.error) {
      return errors;
    }

    let jsonVocabulary = vocabulary.getVocabulary();
    jsonVocabulary.push({
      ...data,
      id: Date.now(),
    });

    ordenarAsc(jsonVocabulary, "word");
    vocabulary.setVocabulary(jsonVocabulary);
    return responseSuccess();
  };

  const deleteRegistry = (id) => {
    try {
      let arrVocabulary = vocabulary.getVocabulary();
      const filter = arrVocabulary.filter((item) => {
        return item.id !== id;
      });

      vocabulary.setVocabulary(filter);
      return responseSuccess();
    } catch (error) {
      console.log(error);
      return responseError("Ocurrió un error, inténtelo mas tarde");
    }
  };

  return {
    data,
    saveEdit,
    saveAdd,
    deleteRegistry,
    editExample,
    getComment,
    getExample,
    getExamples,
    getId,
    getImage,
    getType,
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

export default useForm;
