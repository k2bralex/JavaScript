let elems = document.getElementById('thisPC')
    .getElementsByTagName('ul');

for (const elem of elems) {
    console.log(elem.value);
    elem.addEventListener('click', ShowHide);
}

function ShowHide(e) {
    let l1 = e.target.getElementsByTagName('li');
    for (const lElement of l1) {
        if (lElement.style.display === 'none')
        {
            lElement.style.display = 'block';
        }
        else lElement.style.display = 'none';
    }
}


let allElems = document.getElementById('menu2')
    .getElementsByTagName('a');

for (const elem of allElems) {
    elem.addEventListener('mouseout', e => {
        e.target.style.fontWeight = 'normal';
    });
    elem.addEventListener('mouseover', e => {
        e.target.style.fontWeight = 'bold';
    });
}
