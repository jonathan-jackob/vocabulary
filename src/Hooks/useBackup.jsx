const useBackup = () => {
  /**
   * descarga un archivo json recibe json
   * @param {object} data contenido de json
   * @param {string} name nombre del archivo generado (sin el .json)
   */
  const downloadJSON = (data, name) => {
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = name + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /**
   *  lee un archivo en input file
   * @param event evento input
   * @param {func} onload funcion que se ejecuta cuando carga el archivo en el input
   */
  const loadFile = (event, onload) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = onload;
  };
  return { downloadJSON, loadFile };
};

export default useBackup;
