let triangle = document.getElementById('triangle');
let border = document.getElementById('borderId');

triangle.onmousedown = function (e) {
    let shiftX = e.clientX - triangle.getBoundingClientRect().left;
    let shiftY = e.clientY - triangle.getBoundingClientRect().top;

    triangle.style.position = 'absolute';
    triangle.style.zIndex = 1000;
    document.body.append(triangle);

    moveAt(e.pageX, e.pageY);
    function moveAt(pageX, pageY) {
        triangle.style.left = pageX - shiftX + 'px';
        triangle.style.top = pageY - shiftY + 'px';
        border.style.width = pageX - 24 + 'px';
        border.style.height = pageY - 1385 + 'px';
    }

    function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);

    triangle.onmouseup = function (e){
        document.removeEventListener('mousemove', onMouseMove);
        triangle.onmouseup = null;
    }
}
