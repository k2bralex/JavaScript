/*Задание 5
Создать html-страницу со списком книг.
    При щелчке на книгу, цвет фона должен меняться на оранжевый.
    Учтите, что при повторном щелчке на другую книгу, предыдущей –
необходимо возвращать прежний цвет.*/

/*собираем коллекцию из списка*/
let elems = document.getElementById('litList')
                        .getElementsByTagName('li');
/*На каждый эелемнт вешаеем слушаетля*/
for (const elem of elems) {
    elem.addEventListener("click", bgColorChange);
}
/*Пробегаем по всему списку сбрасываем предыдущее выделение и ставим фон на новое*/
function bgColorChange(e){
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.backgroundColor = 'white';
    }
    e.target.style.backgroundColor = 'lightskyblue';
}

