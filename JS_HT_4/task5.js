/*Задание 6
Создать html-страницу с несколькими кнопками.
    При наведении на кнопку, должна появляться подсказка с тек-
стом. По умолчанию – подсказка появляется сверху от кнопки. Но
если она не помещается сверху от кнопки, тогда отображается снизу.*/

/*кнопка*/
let btn1 = document.getElementById('btnTtp');
/*т.к. кнопка одна то берем из коллекции первый эелемент
* для других кнопок классом удобнее*/
let ttp = document.getElementsByClassName('TtpText')[0];

/*два события на наведение (с задержкой) и уход мышки (без задержки)*/
btn1.onmouseenter = function () { setTimeout(()=>{ttp.style.visibility = 'visible'}, 1200) };
btn1.onmouseleave = function () {ttp.style.visibility = 'hidden'};