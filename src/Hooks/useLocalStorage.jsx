const useLocalStorage = (itemName = "") => {
  if (itemName.trim() == "") {
    console.error("se necesita recibir el item name del local storage");
  }

  //getters
  /**
   * retorna lo que se recupera del local storage
   * @returns {string}
   */
  const getData = () => {
    let $localStorage = localStorage.getItem(itemName);

    if ($localStorage === null) {
      $localStorage = "";
    }

    return $localStorage;
  };
  /**
   * retorna lo que se recupera del local storage convertido a JSON
   * @returns {string}
   */
  const getDataJSON = () => {
    const data = getData();
    if (data === "") {
      return [];
    }

    const dataJSON = JSON.parse(data);
    if (typeof dataJSON === "object") {
      return dataJSON;
    }
    return [];
  };

  //setters
  /**
   * agrega lo que recibe al local storage
   * @param {string} data
   */
  const setData = (data) => {
    localStorage.setItem(itemName, data);
  };
  /**
   * agrega lo que recibe al local storage pasando de json a string
   * @param {string} data
   */
  const setDataJSON = (data) => {
    if (typeof data === "object") {
      setData(JSON.stringify(data));
    } else {
      console.error("datos incorrectos");
    }
  };

  return {
    getData,
    getDataJSON,
    setData,
    setDataJSON,
  };
};

export default useLocalStorage;
