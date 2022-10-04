let lastSelected = null;
/*собираем коллекцию из списка*/
let elems1 = document.getElementById('litList').getElementsByTagName('li');
/*На каждый эелемнт вешаеем слушаетля*/
for (const elem of elems1) {
    elem.addEventListener("click", bgColorChange);
}
/*Пробегаем по всему списку сбрасываем предыдущее выделение и ставим фон на новое*/
function bgColorChange(e){
    if (!lastSelected) lastSelected = this;
    if (e.shiftKey)
    {
        let fstIndx =  Array.from(elems1).indexOf(this);
        let scndIndx = Array.from(elems1).indexOf(lastSelected);

        console.log(fstIndx + "    " + scndIndx)

        let indexes = Array.from(elems1).slice(Math.min(fstIndx, scndIndx), Math.max(fstIndx, scndIndx)+1);
        for (let i = 0; i < indexes.length; i++) {
          indexes[i].style.backgroundColor = 'lightskyblue';
        }
        for (const indexesKey of indexes) {
            elems1[indexesKey].style.backgroundColor = 'lightskyblue';
        }
    }
    if (e.ctrlKey)
    {
        e.target.style.backgroundColor == 'lightskyblue'
            ? e.target.style.backgroundColor = '#cfecbd'
            :e.target.style.backgroundColor = 'lightskyblue';
    }
    else{
        for (let i = 0; i < elems1.length; i++) {
            elems1[i].style.backgroundColor = '#cfecbd';
        }
        e.target.style.backgroundColor = 'lightskyblue';
    }
    lastSelected = this;
}



