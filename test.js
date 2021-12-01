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
const namesPeople = people.map(p => p.name);
console.log(namesPeople);

//#############################################################

console.log('stop');