let showButton = document.getElementById('showText');
let result = document.getElementById('showContent');

showButton.addEventListener('click', SetStyle);

function SetStyle() {
    result.textContent = document.getElementById('textContent').value;
    if (MessageCheck(document.getElementById('textContent').value))
    {
        alert('Text field is empty');
        return;
    }
    document.getElementById('resultBlock').style.display = 'block';
    CheckBoxesResult(result);
    RadioSelected(result)
}
function CheckBoxesResult(elem) {
    let checks = document.getElementsByName('style');
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked)
        {
            switch (i){
                case 0: elem.style.fontWeight = 'bold'; break;
                case 1: elem.style.textDecorationLine = 'underline'; break;
                case 2: elem.style.fontStyle = 'italic'; break;
            }
        }
    }
}
function RadioSelected(elem) {
    let rButtons = document.getElementsByName('align');
    for (let i = 0; i < rButtons.length; i++) {
        if (rButtons[i].checked)
        {
            switch (i){
                case 0: elem.style.textAlign = 'left'; break;
                case 1: elem.style.textAlign = 'right'; break;
                case 2: elem.style.textAlign = 'justify'; break;
            }
        }
    }
}

function MessageCheck(message) {
    return /^\s*$/.test(message);
}