import PropTypes from "prop-types";

const getJoinTypesUppercase = (types) => {
  let typesWord = "";
  for (const type in types) {
    if (Object.hasOwnProperty.call(types, type)) {
      if (types[type]) {
        typesWord += typesWord != "" ? ", " : "";
        typesWord += type.toUpperCase();
      }
    }
  }
  return typesWord;
};

export default getJoinTypesUppercase;
