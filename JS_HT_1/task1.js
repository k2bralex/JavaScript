var value;
const currentYear = 2022;
const currentEuro = 1.2;

/*1. Запросите у пользователя его имя и выведите в ответ:
    «Привет, его имя!».*/

value = prompt('Enter your name:');
alert('Hello '+ (value));

/*2. Запросите у пользователя год его рождения, посчитайте,
    сколько ему лет и выведите результат. Текущий год укажите в коде как константу.*/

value = prompt('Enter your birth year:');
alert('Your age:' + (currentYear-value));

/*3. Запросите у пользователя длину стороны квадрата и вы-
ведите периметр такого квадрата.*/

value = prompt('Enter square side:');
alert('Perimeter:' + (value**value));

/*4. Запросите у пользователя радиус окружности и выведите
площадь такой окружности.*/

value = prompt('Enter radius:');
alert(`Circle area: ${3.14*value**value}`);

/*5. Запросите у пользователя расстояние в км между двумя
городами и за сколько часов он хочет добраться. Посчи-
тайте скорость, с которой необходимо двигаться, чтобы
успеть вовремя.*/

value = prompt('Enter distance between cities:');
let time = prompt('Enter time to drive:');
alert(`You need to drive ${value/time} to arrive in time`);

/*6. Реализуйте конвертор валют. Пользователь вводит долла-
ры, программа переводит в евро. Курс валюты храните в
константе.*/

value = prompt('Enter dollars value:');
alert(`${value}$ = ${value*1.2}Euro`);

/*7. Пользователь указывает объем флешки в Гб. Программа
должна посчитать сколько файлов размером в 820 Мб по-
мещается на флешку.*/

value = prompt('Enter capacity of Flash-drive:');
alert(`You can write ${Math.floor(value*1000/820)} files on flash-drive`);

/*8. Пользователь вводит сумму денег в кошельке и цену одной
шоколадки. Программа выводит сколько шоколадок может
купить пользователь и сколько сдачи у него останется.*/

value = prompt('Enter sum you have:');
let price = prompt('Enter chocolate price:');
let count = Math.floor(value/price);
alert(`You can by ${count} chocolates. Remain ${value - (price*count)} money`);

/*9. Запросите у пользователя трехзначное число и выведите
его задом наперед. Для решения задачи вам понадобится
оператор % (остаток от деления).*/

value = prompt('Enter number:');
function reverse(s){
    return [...s].reverse().join('')
}
alert(`Reversed number ${reverse(value)}`);

/*10. Запросите у пользователя целое число и выведите в ответ,
    четное число или нет. В задании используйте логические
операторы. В задании не надо использовать if или switch.*/

value = prompt('Enter number:');
function isOdd(num){
    return (num%2==0)? `${num} is odd` : `${num} is even`;
}
alert(isOdd(value));