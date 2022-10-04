let textElem = document.getElementById('text');
let textArea = null;

window.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'E')
    {
        if (textArea==null) textArea=document.createElement('textarea');
        textArea.textContent = textElem.innerText;
        textArea.style.width = '80%';
        textArea.style.height = '100px';
        textElem.style.display = 'none';
        document.getElementById('changeBlock').appendChild(textArea);
    }
    if (e.ctrlKey && e.key === 'S')
    {
        console.log(textArea.textContent);
        textElem.textContent = textArea.value;
        textArea.style.display = 'none';
        textElem.style.display = 'inline';
    }
})



