let searchTrain = document.getElementById('searchTrain');
let bookTrain = document.getElementById('bookBtn');

searchTrain.addEventListener('click', function (){
    let elem = document.getElementsByClassName('total')[0];
    document.getElementById('vagon').style.display = 'flex';
    elem.style.display = 'inline-block';
    AddPrice(elem);
})
bookTrain.addEventListener('click', function () {
    TableNodeCreator();
});

function AddPrice(elem) {
    let firstChild=elem.childNodes[1];
    let newPriceNode = document.createTextNode(`Total price: ${GetRandomInt()}$`);
    elem.insertBefore(newPriceNode, firstChild);
}
function GetRandomInt() {
    return Math.floor(Math.random() * 50) + 100;
}
function TableNodeCreator(){
    let firstChild = document.getElementById('tabResult').lastChild;
    let checkedSeats = document.getElementsByName('seats');

    for (let i = 0; i < checkedSeats.length; i++) {
        if (checkedSeats[i].checked)
        {
            let newChildTr = document.createElement('tr');
            for (let j = 0; j < 3; j++) {
                let newChildTd = document.createElement('td');
                switch (j) {
                    case 0: newChildTd.textContent = document.getElementById('direction').value; break;
                    case 1: newChildTd.textContent = document.getElementById('dateToGo').value.toLocaleString(); break;
                    case 2: newChildTd.textContent = `${i+1}`; break;
                }
                newChildTr.appendChild(newChildTd);
            }
            document.getElementById('tabResult').insertAfter(newChildTr, firstChild);
        }
    }
}
Node.prototype.insertAfter = function(n,r) {this.insertBefore(n,r.nextSibling);};



