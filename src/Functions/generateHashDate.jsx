const generateHashDate = () => {
  const addZero = (num) => (num < 10 ? `0${num}` : num);

  const dateObj = new Date();
  let hash = dateObj.getFullYear();
  hash += "_" + addZero(dateObj.getMonth() + 1); // getMonth() retorna de 0-11
  hash += "_" + addZero(dateObj.getDate());
  hash += addZero(dateObj.getHours());
  hash += addZero(dateObj.getMinutes());
  hash += addZero(dateObj.getSeconds());

  return hash;
};

export default generateHashDate;
