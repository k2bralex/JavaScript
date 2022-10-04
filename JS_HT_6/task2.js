let rightAnswers = [1,0,1,0,0,1,0,1];
let finishButton = document.getElementById('calculate');

finishButton.addEventListener('click', GetAnswer);

function GetAnswer() {
    let newAnswer = document.getElementById('result');
    newAnswer.style.display = 'block';
    newAnswer.innerHTML = `Result: <b>${ResultCalculate()}</b> correct answers to 4 questions`;
}
function ResultCalculate() {
    let radioBtnCollection = document.getElementById('task2')
        .getElementsByTagName('input');
    let total=0;
    for (let i = 0; i < radioBtnCollection.length; i++) {
        if (radioBtnCollection[i].checked) total+=rightAnswers[i];
    }
    return total;
}

