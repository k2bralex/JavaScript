/*Задание 1
Создать html-страницу для ввода имени пользователя.
    Необходимо проверять каждый символ, который вводит поль-
зователь. Если он ввел цифру, то не отображать ее в input.*/

function digitCheck(e){
    /*Находим эелемент*/
    let elem = document.getElementById("inputName");
    /*Вешаем событие на замену цифры на ''*/
    elem.oninput = function (){
        this.value = this.value.replace(/\d/, '');
    }
}
/*Добавляем слушателя событий*/
addEventListener("keydown", digitCheck);