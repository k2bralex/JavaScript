/*Задание 2
Создать массив, описывающий чек в магазине. Каждый эле-
мент массива состоит из названия товара, количества и цены за
единицу товара. Написать следующие функции.
1. Распечатка чека на экран.
2. Подсчет общей суммы покупки.
3. Получение самой дорогой покупки в чеке.
4. Подсчет средней стоимости одного товара в чеке.*/

/*Задаем массив объектов чек*/
let shoppingLst = [
    {name: "bread", count: 1, price: 10.10},
    {name: "potato", count: 20, price: 20.20},
    {name: "cheese", count: 2, price: 15.15},
    {name: "cucumber", count: 5, price: 12.12},
    {name: "oil", count: 1, price: 11.11},
    {name: "sausage", count: 10, price: 4.4},
    {name: "meat", count: 1, price: 5.5},
    {name: "milk", count: 5, price: .5}
];
/*построчно выводим в доукмент + добавляем строку ИТОГО*/
let printLst = (arr) => {
    let summary = 0;
    for (let i = 0; i < arr.length; i++) {
        document.write(`<b>${arr[i].name}</b>......${arr[i].count} x ${arr[i].price}UAH 
            : ${arr[i].count*arr[i].price}UAH<br>`);
        summary+=arr[i].count*arr[i].price;
    }
    document.write(`<b>Total check sum: ${summary}UAH</b><br>`)
}
/*создаем массив заполняем новыми объектами на базе чекаЖ
* имя + общая сумма по товару
* сортируем по убыванию, берем максимальное*/
let getExpensive = (arr) =>{
    let mostExpensive =[];
    for (let i = 0; i < arr.length; i++) {
        mostExpensive.push({name: arr[i].name, total: arr[i].count*arr[i].price});
        }
    let result=mostExpensive.sort((a,b)=>b.total-a.total)[0];
    document.write(`${result.name}: ${result.total}UAH <br>`);
}
/*считаем сумму по цене+сумма по количеству=среднее по товару*/
let averagePrice = (arr) => {
    let sum = arr.reduce((a,b)=>a.price+b.price,0);
    let count = arr.reduce((a,b)=>a.count+b.count,0);
    document.write(`Average product price: ${(sum/count)||0}<br>`);
}

/*проверки*/
printLst(shoppingLst);
getExpensive(shoppingLst);
averagePrice(shoppingLst);