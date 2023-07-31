import React, { useState } from "react";
import useResponse from "./useResponse";
import useLocalStorage from "./useLocalStorage";
import ordenarAsc from "Functions/ordenarAsc";

const useGrammar = (dataInit = null) => {
  const initRules = [
    {
      title: "",
      examples: [""],
    },
  ];
  const formInit = {
    description: "",
    examples: [""],
    keywords: "",
    title: "",
    rules: initRules,
    inWords: false,
  };
  const grammar = useLocalStorage("grammar");
  const response = useResponse();
  const [data, setData] = useState(formInit);

  // getters
  const getDescription = () => data.description;
  const getExample = (key) => data.examples[key];
  const getExamples = () => data.examples;
  const getId = () => data.id;
  const getInWords = () => data.inWords;
  const getKeywords = () => data.keywords;
  const getRule = (key) => data.rules[key];
  const getRules = () => data.rules;
  const getTitle = () => data.title;

  //setters
  const setAllData = (data) => {
    setData({ ...formInit, ...data });
  };
  const setDescription = (description) => {
    setData({ ...data, description });
  };
  const setExamples = (examples) => {
    setData({ ...data, examples });
  };
  const setInWords = (inWords) => {
    setData({ ...data, inWords });
  };
  const setKeywords = (keywords) => {
    setData({ ...data, keywords });
  };
  const setRule = (keyRule, rule) => {
    let rules = getRules();
    rules[keyRule] = rule;
    setData({ ...data, rules });
  };
  const setTitle = (title) => {
    setData({ ...data, title });
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

  const addRule = () => {
    setData({ ...data, rules: [...initRules, ...data.rules] });
  };

  const removeRule = (keyRule) => {
    const rules = data.rules.filter((rule, key) => key !== keyRule);
    setData({ ...data, rules });
  };

  const clean = () => {
    setData(formInit);
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

  if (dataInit !== null) {
    setAllData(dataInit);
  }

  return {
    data,
    formInit,
    clean,
    saveAdd,
    saveEdit,
    addRule,
    removeRule,
    deleteItem,
    editExample,
    getDescription,
    getExample,
    getExamples,
    getId,
    getInWords,
    getKeywords,
    getRule,
    getRules,
    getTitle,
    setAllData,
    setDescription,
    setExamples,
    setInWords,
    setKeywords,
    setRule,
    setTitle,
  };
};

export default useGrammar;
