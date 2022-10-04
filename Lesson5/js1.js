let menu = document.getElementById('menu');
let newItem = document.createElement('li');
newItem.textContent = 'Something Added';
let Add = document.getElementById('addCenter');
Add.onclick = function () {
    let position = menu.getElementsByTagName('li').length/2;
    menu.insertBefore(newItem, menu.getElementsByTagName('li')[position]);
}

let btn = document.getElementById('replace');
btn.onclick = function (){
    let menu = document.getElementById('menu');
    let li = document.createElement('li');
    li.textContent = 'Home';
    menu.replaceChild(li, menu.firstElementChild);
}