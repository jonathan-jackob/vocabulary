/**
 * Ordena un array de objetos recibido
 * @param {Array} data array de objetos
 * @param {string} key nombre del indice por el cual se requiere ordenar
 * @param {string} orden tipo de orden que se necesita "acs|desc", default "asc",
 * @returns array ordenado
 */
function ordenarAsc(data, key, orden = "asc") {
  return data.sort(function (a, b) {
    const valueA = String(a[key]).toLocaleLowerCase();
    const valueB = String(b[key]).toLocaleLowerCase();

    if (orden === "asc") {
      return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
    }

    if (orden === "desc") {
      return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
    }
  });
}

export default ordenarAsc;
