let postOriginal = document.getElementById('messageBlock');
let buttonAdd = document.getElementById('add');

buttonAdd.addEventListener('click', function (e) {
    let newPost = postOriginal.cloneNode(true);
    for (let i = 0; i < newPost.childNodes.length; i++) {
        console.log(newPost.childNodes[i])
        if (i==1)
        {
            for (let j = 0; j < newPost.childNodes[i].childNodes.length; j++) {
                let item = newPost.childNodes[i].childNodes[j];
                switch (item.nodeName){
                    case 'SPAN':
                        if (NameCheck(document.getElementById('input1').value))
                            item.textContent = document.getElementById('input1').value;
                        else {
                            alert('Enter correct name!');
                            return;
                        }
                        break;
                    case 'DATA': item.textContent = (new Date()).toLocaleString();
                }
            }

        }
        if (i==5)
        {
            if (!MessageCheck(document.getElementById('input2').value)){
                newPost.childNodes[i].childNodes[0].textContent = document.getElementById('input2').value;
            }
            else
            {
                alert('Message is empty!');
                return;
            }
        }
    }
    document.getElementById('messagesTable').appendChild(newPost);
});

/*Добавлена проверка на корректность имени - только буквы и цифры*/
function NameCheck(name) {
    return /[a-z0-9]/.test(name);
}
/*Добавлена проверка сообщение - не пустое*/
function MessageCheck(message) {
    return /^\s*$/.test(message);
}
