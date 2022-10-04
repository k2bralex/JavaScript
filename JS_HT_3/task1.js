/*Задание 1
Создать массив «Список покупок». Каждый элемент массива
является объектом, который содержит название продукта, необ-
ходимое количество и куплен или нет. Написать несколько функ-
ций для работы с таким массивом.
1. Вывод всего списка на экран таким образом, чтобы сначала
шли некупленные продукты, а потом – купленные.
2. Добавление покупки в список. Учтите, что при добавлении
покупки с уже существующим в списке продуктом, необ-
ходимо увеличивать количество в существующей покупке,
    а не добавлять новую.
3. Покупка продукта. Функция принимает название продукта
и отмечает его как купленный.*/

/* Задаем массив объектов*/
let shoppingList = [
    {name: "bread", count: 1, isBought: true},
    {name: "potato", count: 20, isBought: false},
    {name: "cheese", count: 2, isBought: true},
    {name: "cucumber", count: 5, isBought: false},
    {name: "oil", count: 1, isBought: true},
    {name: "sausage", count: 10, isBought: true},
    {name: "meat", count: 1, isBought: false},
    {name: "milk", count: 5, isBought: true}
];
/*Вывод массива*/
let print = (arr) => {
    for (const arrKey in arr) {
        if ((typeof arr[arrKey]) == 'object')
             print(arr[arrKey]);
        else console.log(`${arrKey}: ${arr[arrKey]}`);
    }
}
/*Добавление элемента в список. Передаем масив и новый объект.
*если в результате поиска объект найден, то изменяется количество
* если нет, то добавлется новый элемент*/
let itemAdd = (arr, item) => {
    let index = arr.findIndex(i=>i.name===item.name);
    if (index>0)
    {
        arr[index].count+=item.count;
    }
    else arr.push(item);
}
/*Изменение статуса объекта, через поиск по имени.
если не найдено выводим в консоль что нет такого продукта*/
let bought = (arr, prodName) => {
    let index = arr.findIndex(i=>i.name===prodName);
    (index>0)?arr[index].isBought=true:console.log("There are no product");
}

/*Проверки*/
print(shoppingList);

let itemToAdd1 = {name: "potato", count: 10, isBought: false};
let itemToAdd2 = {name: "water", count: 3, isBought: true};

itemAdd(shoppingList, itemToAdd1);
print(shoppingList);

itemAdd(shoppingList, itemToAdd2);
print(shoppingList);

bought(shoppingList, "meat");
print(shoppingList);