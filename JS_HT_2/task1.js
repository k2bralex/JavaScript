var value;

/*1. Запросить у пользователя его возраст и определить, кем он
является: ребенком (0–2), подростком (12–18), взрослым
(18_60) или пенсионером (60– ...).*/

value = prompt("Enter your age:");
console.log(`You are: ${(value>60?'pensioner'
    :value>18?'adult'
        :value>12?'teenager'
            :'child')}`);

/*2. Запросить у пользователя число от 0 до 9 и вывести ему
спецсимвол, который расположен на этой клавише (1–!,2–@, 3–# и т. д).*/

value = parseInt(prompt("Enter number [0-9]:"));
/*alert(String.fromCharCode(value+32));*/
confirm(String.fromCharCode(value+32));

/*3. Запросить у пользователя трехзначное и число и проверить,
    есть ли в нем одинаковые цифры.*/

value = prompt("Enter three-digit number:");
console.log((value[0]===value[1]) || (value[1]===value[2]) || (value[0]===value[2]));

/*4. Запросить у пользователя год и проверить, високосный он
или нет. Високосный год либо кратен 400, либо кратен 4 и
при этом не кратен 100.*/

value = parseInt(prompt("Enter year:"));
function leapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
console.log(leapYear(value));

/*5. Запросить у пользователя пятиразрядное число и определить,
является ли оно палиндромом.*/

value = prompt("Enter fifth-digit number:");
console.log(value===[...value].reverse().join(''));

/*6. Написать конвертор валют. Пользователь вводит количе-
ство USD, выбирает, в какую валюту хочет перевести: EUR,
    UAN или AZN, и получает в ответ соответствующую сумму.*/

let EUR = {name: 'EUR', course: 1.2};
let UAH = {name: 'UAH', course: 32.2};
let AZN = {name: 'AZN', course: 2500.53};

value = prompt("Enter USD value:");
let currencyToExchange = prompt("Enter currency to exchange " +
    "['EUR', 'UAH', 'AZN']");

function displayCourse(currToExchange){
    switch (currToExchange) {
        case 'EUR': console.log(EUR.course*value);break;
        case 'UAH': console.log(UAH.course*value);break;
        case 'AZN': console.log(AZN.course*value);break;
    }
}

displayCourse(currencyToExchange);


/*7. Запросить у пользователя сумму покупки и вывести сумму
к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
до 500 – 5%, от 500 и выше – 7%.*/

value = parseInt(prompt("Enter sum of purchase:"));
function salePercantge(purchasePrise) {
    return purchasePrise>500?purchasePrise-purchasePrise*0.07
        :purchasePrise>300?purchasePrise-purchasePrise*0.05
            :purchasePrise-purchasePrise*0.03;
}

console.log(salePercantge(value));

/*8. Запросить у пользователя длину окружности и периметр
квадрата. Определить, может ли такая окружность поме-
ститься в указанный квадрат.*/

value = prompt("Enter circle length:");
let squarePerimeter = prompt('Enter square perimeter:');

function isCircleInSquare(circleLength, squarePerimeter) {
    return circleLength/Math.PI<squarePerimeter/4;
}

console.log(isCircleInSquare(value,squarePerimeter));

/*9. Задать пользователю 3 вопроса, в каждом вопросе по 3 ва-
рианта ответа. За каждый правильный ответ начисляется 2
балла. После вопросов выведите пользователю количество
набранных баллов.*/

function threeQuestions(){
    let question; let count = 0;
    for (let i = 0; i < 3; i++) {
        question = prompt(`Question ${i+1}! Enter [0-1-2]`);
        if (!question) count+=2;
    }
    console.log(count);
}
threeQuestions();

/*10. Запросить дату (день, месяц, год) и вывести следующую
за ней дату. Учтите возможность перехода на следующий
месяц, год, а также високосный год.*/

value = new Date(prompt('Enter date mm/dd/yyyy'));
function nextDay(currentDate){
    let tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate()+1);
    console.log(tomorrow.toLocaleString());
}
nextDay(value);
