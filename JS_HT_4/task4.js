/*Задание 4
Создать html-страницу со светофором и кнопкой, которая
переключает светофор на следующий цвет.*/

/*Кнопка управления светофром*/
let btnNext = document.getElementById('next');
/*Коллеркция лампочек светофора*/
let lightCollection = document.getElementById('lightBorder')
                                .getElementsByTagName('button');
/*цветовая гамма*/
let colors = ['red', 'yellow', 'green'];
/*текущая позиция в светофоре*/
let currentPosition = 0;
/*логическая переменная, определяющая направление включения света
* от красного к зеленому и обратно*/
let isUp;

function lightChange() {
    /*выключаем все цвета*/
    for (const light of lightCollection) {
        light.style.backgroundColor = 'darkgray';
    }
    /*определяем направление движения*/
    if (currentPosition==0) isUp = true; else if (currentPosition == 2) isUp = false;
    /*изменяем текущую позицию*/
    (isUp&&currentPosition<2) ? currentPosition++ : currentPosition--;
    /*применяем нужный цвет к фону*/
    lightCollection[currentPosition].style.backgroundColor = colors[currentPosition];
}
/*вешаем слушательь*/
btnNext.addEventListener('click', lightChange);



