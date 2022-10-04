/*Задание 3
Создать массив css-стилей (цвет, размер шрифта, выравнива-
ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
ект, состоящий из двух свойств: название стиля и значение стиля.
    Написать функцию, которая принимает массив стилей и
текст, и выводит этот текст с помощью document.write() в тегах
<p></p>, добавив в открывающий тег атрибут style со всеми сти-
лями, перечисленными в массиве.*/

/*Текст в параграф*/
var textToPrint = "Lorem ipsum dolor sit amet, consectetur " +
    "adipisicing elit. Beatae eveniet id " +
    "natus nemo nihil quisquam.";
/*Массив - стиль*/
var myStyle = [
    { name: "color", value: "green"},
    { name: "font-size", value: "18px"},
    { name: "text-align", value: "center"},
    { name: "text-decoration", value: "underline"}
]

/*создаем параграф*/
const paragraph = document.createElement("p");
/*создаем текст*/
const node = document.createTextNode(textToPrint);
/*стилизуем*/
for (let i = 0; i < myStyle.length; i++) {
    paragraph.style[myStyle[i].name]= myStyle[i].value;
}
/*добавляем текст*/
paragraph.appendChild(node);
/*добавляем эелмент вдокумент*/
document.body.appendChild(paragraph);
