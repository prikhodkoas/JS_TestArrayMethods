let people = [
    {name: 'Alex', age: 36, budget: 2800},
    {name: 'Ann', age: 34, budget: 3000},
    {name: 'Vika', age: 11, budget: 100},
    {name: 'Max', age: 1, budget: 100},
    {name: 'Dima', age: 40, budget: 5300},
    {name: 'Jora', age: 55, budget: 1400},
    {name: 'Petya', age: 27, budget: 2000},
]

//########
// for
//########
//////############################################
////// Вывод всего массива объектов через цикл for
//////############################################

// for(let i = 0; i < people.length; i++){
//     console.log(people[i]);
// }

//////############################################

//########
// for_of
//########
//////###############################################
////// Вывод всего массива объектов через цикл for_of
//////###############################################

// for(let element of people){
//     console.log(element);
// }

//////###############################################

//########
// forEach
//########
//////#########################################################
////// Вывод всего массива объектов через метод массива forEach
//////#########################################################

//// 1.1. Полная запись
// people.forEach(function(element, index, array){
//     console.log(element);
// })

//// 1.2. Тоже самое, только вместо функции, стрелочная функция
// people.forEach((element, index, array) => console.log(element));

//// 1.3. Тоже самое, только уберем не используемые аргументы
// people.forEach(element => console.log(element));

//// 1.4. Тоже самое, только сократим название до р (Как в шарпах :))) )
// people.forEach(p => console.log(p));

//////#########################################################

//########
// map
//########
//#############################################################
// Мапим массив в новый массив и выводим
//#############################################################

//// 1.1. Делаем такой же массив (но он какой-то пронумерованный)
// const newPeople = people.map(function(element, index, array){
//     return element;
// });
// console.log(newPeople);

//// 1.2. Тоже самое, только вместо функции, стрелочная функция
// const newPeople = people.map((element, index, array) => element);
// console.log(newPeople);

//// 1.3. Тоже самое, только уберем не используемые аргументы
// const newPeople = people.map(element => element);
// console.log(newPeople);

//// 1.4. Тоже самое, только сократим название до р (Как в шарпах :))) )
// const newPeople = people.map(p => p);
// console.log(newPeople);

//// 2.1. Делаем новый массив только с именами
// const namesPeople = people.map(function(elem, ind, arr){
//     return elem.name;
// });
// console.log(namesPeople);

//// 2.2. Тоже самое, но совсем коротко
// const namesPeople = people.map(p => p.name);
// console.log(namesPeople);

//// 3.1. Делаем новый массив с именем и возрастом людей (без бюджета)
// const newPeople = people.map((elem, ind, arr) => {
//     return {name: elem.name, age: elem.age}
// });
// console.log(newPeople);

//// 3.2. Тоже самое, но совсем коротко
//// Доп. скобки нужно ставить что бы фигурные скобки объекта
//// не принимались за тело функции
// const newPeople = people.map(p => ({name: p.name, age: p.age}));
// console.log(newPeople);

//#############################################################

//########
// filter
//########
//#############################################################
// Делаем выборку отдельных элементов массива в новый массив
//#############################################################

//// 1.1. Отбираем в новый массив, людей старше 18 лет сначала for
// const newPeople = [];
// for(let i = 0; i < people.length; i++){
//     if(people[i].age > 18){
//         newPeople.push(people[i]);
//     }
// }
// console.log(newPeople);

//// 1.2. Теперь тоже самое с помощью filter
// const newPeople = people.filter((elem, ind, arr) => {
//     if(elem.age > 18){
//         return true;
//     }
// });
// console.log(newPeople);

//// 1.2. Теперь сокращаем. (убираем не используемые параметры)
//// и учитывая, что возвращать нужно bool, то убираем if
// const newPeople = people.filter(elem => elem.age > 18);
// console.log(newPeople);

//// 1.3. Тоже самое, но совсем коротко
// const newPeople = people.filter(p => p.age > 18);
// console.log(newPeople);

//#############################################################

//########
// reduce
//########
//#############################################################
// Считаем общую сумму бюджета у всех людей
//#############################################################

//// 1.1. Сначала через for
// let total = 0;
// for(let i = 0; i < people.length; i++)
// {
//     total += people[i].budget;
// }
// console.log(total);

//// 1.2. Теперь с помощью reduce
//// reduce принимает два параметра 1-функция, 2-начальное значение
//// в функции два параметра 1-callBack переменная 2-переменная текущей итерации
// const total = people.reduce((res, element) => {
//     return res + element.budget;
// }, 0);
// console.log(total);

//// 1.3. Теперь сокращаем
// const total = people.reduce((res, p) => res + p.budget, 0)
// console.log(total);

//// 2.1. Считаем средний возраст людей (сначала через for)
// let average = 0;
// for(let i = 0; i < people.length; i++){
//     average += people[i].age;
// }
// average = Math.round(average / people.length);
// console.log(average);

//// 2.2. Теперь используем в вычислениях reduce
// const average = Math.round(people.reduce((age, person) => age + person.age, 0) / people.length);
// console.log(average);

//// 2.3. Укоротим совсем немножко (только имена переменных)
// const average = Math.round(people.reduce((res, p) => res + p.age, 0) / people.length);
// console.log(average);

//#############################################################

//########
// find
//########
//#############################################################
// Ищем человека с возрастом больше 5 и менише 20 лет
//#############################################################

//// 1.1. Сразу ищем с помощью find
// const person = people.find(p => p.age > 5 && p.age < 20);
// console.log(person);

//#############################################################

//########
// findIndex
//########
//#############################################################
// Ищем индекс в массиве человека с возрастом больше 5 и менише 20 лет
//#############################################################

//// 1.1. Сразу ищем с помощью findIndex
const person = people.findIndex(p => p.age > 5 && p.age < 20);
console.log(person);

//#############################################################

console.log('stop');