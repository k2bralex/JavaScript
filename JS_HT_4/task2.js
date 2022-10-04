/*Задание 2
Создать html-страницу с кнопкой Открыть и модальным
окном. На модальном окне должен быть текст и кнопка Закрыть.
    Изначально модальное окно не отображается. При клике на
кнопку Открыть появляется модальное окно, на кнопку Закрыть –
исчезает.*/

/*Находи окно*/
let modal = document.getElementById('modal');
/*Находи кнопку*/
let btnOpen = document.getElementById('open-modal');
/*Вешаем событие на кнопку открыть*/
btnOpen.onclick = function () {modal.style.display = 'block'}

/*Вешаем событие на кнопку закрыть*/
let btnClose= document.getElementById('close-modal');
btnClose.onclick = function () {modal.style.display = 'none'}