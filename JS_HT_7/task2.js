let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let currentColor1;
let triangleStartX,triangleStartY;
let x1,x2,y1,y2;

/*слушатель на смену цвета*/
document.getElementById('colorPicker').addEventListener('change', function (e) {
    console.log(e.target.value)
    currentColor1 = e.target.value;
})


window.onload = function () {
    canvas.onmousedown = startDraw;
    canvas.onmouseup = stopDraw;
}

/*поуление начальных координат для рисования*/
function startDraw(e) {
    e.preventDefault();
    e.stopPropagation();
    context.strokeStyle = currentColor1;
    context.fillStyle = currentColor1;
    context.beginPath();
    if (triangleStartX==0 && triangleStartY==0 && document.getElementById('triangle').checked){
        triangleStartX=e.offsetX;
        triangleStartY=e.offsetY;
    }
    context.moveTo(e.offsetX, e.offsetY);
    x1 = e.offsetX;
    y1 = e.offsetY;
}
/*получение конечных и рисование фигур
* ИЗ ВСЕХ ФИГУР ПРАВИЛЬНО СМОГ ФОРМИТЬ ТОЛЬКО КВАДРАТ И КРУГ
* ТАКЖЕ ЕСТЬ НЕДОЧЕТЫ ПО СМЕЩЕНИЮ НАРИСОВАННОЙ ФИГУРЫ, НЕ СМОГ РАЗОБРАТЬСЯ
* ВЕРОЯТНАЯ ПРИЧИНА - ДВА ЗАДАНИЯ НА ОДНОМ ЛИСТЕ НУЖНО СИЛЬНО МУДРИТЬ С КООРДИНАТАМИ*/
function stopDraw(e) {
    e.preventDefault();
    e.stopPropagation();
    x2 = e.offsetX;
    y2 = e.offsetY;
    let figureSelected = document.getElementById('header').getElementsByTagName("input");
    for (const figureSelectedKey of figureSelected) {
        if (figureSelectedKey.checked){
            console.log(figureSelectedKey.id)
            switch (figureSelectedKey.id) {
                case 'rectangle':
                    context.rect(x1,y1,Math.abs(x2-x1),Math.abs(y2-y1));
                    break;
                case 'circle':
                    context.arc(x1, y2,
                        Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)),0,2 * Math.PI, false);
                    break;
                case 'rhombus':
                    context.rect(x1,y1,Math.abs(x2-x1),Math.abs(y2-y1));
                break;
                case 'triangle':
                    context.lineTo(x2,y2);
                    context.lineTo(triangleStartX,triangleStartY);
                break;
            }
        }
    }
    context.stroke();
    context.fill();
}