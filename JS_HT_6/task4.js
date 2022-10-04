let selectBtn = document.getElementsByClassName('select');
let selectedBook = document.getElementById('book');
let buyBtn = document.getElementById('buy');
let result1 = document.getElementById('result1')
    .getElementsByTagName('div')[0];

for (const selectBtnElement of selectBtn) {
    selectBtnElement.addEventListener('click', function (e) {
        selectedBook.value =  e.target.parentNode.childNodes[3].textContent;
    });
}

buyBtn.addEventListener('click', function (e){
    result1.innerText = `Dear ${document.getElementById('orderForm').elements.item(2).value}, thanks for the order!
    Book "${selectedBook.value}" will be delivered on ${document.getElementById('orderForm').elements.item(4).value} to ${document.getElementById('orderForm').elements.item(3).value}.`;
});


