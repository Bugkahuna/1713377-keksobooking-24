//Функция возвращает целое число из заданного диапазона, включая крайние значения.

function getIntNumber(min, max){
  return (max-min > 0)&&(min >=0) ? Math.floor(Math.random()*(max-min+1))+min: 'Неверно указан диапазон значений';
}

getIntNumber(100, 500);


//Функция возвращает число с плавающей точкой из заданного диапазона, включая крайние значения.
//Результат округляется до заданного знака после запятой.
function getFloatNumber(min, max, decimalPlace){
  const exponention = Math.pow(10, decimalPlace);
  return (max-min > 0)&&(min >=0)&&(decimalPlace >= 0) ? Math.floor((Math.random()*(max-min+1)+min) * exponention)/exponention: 'Неверно указан диапазон значений';
}

getFloatNumber(7, 10, 3);
