let phrases = [
  'отправить другу смешную гифку',
  'посмотреть скидки на авиабилеты',
  'разобраться, о чём поют рэперы',
  'Arzamas',
  'расставить книги на полке по цвету',
  'читать про зарплаты в Сан-Франциско'
];

function getRandomElement() {
 let randIndex = Math.floor(Math.random() * phrases.length);
console.log(randIndex);
console.log(phrases[randIndex]);
}
getRandomElement()
