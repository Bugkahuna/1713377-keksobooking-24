//Функция возвращает целое число из заданного диапазона, включая крайние значения.

function getIntNumber(min, max){
  return (max-min > 0)&&(min >=0) ? Math.floor(Math.random()*(max-min+1))+min: 'Неверно указан диапазон значений';
}
getIntNumber(0, 10);


//Функция возвращает число с плавающей точкой из заданного диапазона, включая крайние значения.

function getFloatNumber(min, max){
  return (max-min > 0)&&(min >=0) ? Math.random()*(max-min+1)+min: 'Неверно указан диапазон значений';
}

getFloatNumber(-5, 63);
