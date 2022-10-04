let personRequestData = new XMLHttpRequest();
let userList, postList;
let currentUserId;

/*запрашиваем на сервере данные по персонам*/
personRequestData.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) GetPersons(this.response)
}
personRequestData.open('GET', "https://jsonplaceholder.typicode.com/users");
personRequestData.send();
/*слушатель на кнопку для вывода всех постов выбранного юзеря*/
document.getElementById('showPost').addEventListener('click', GetPostsHandler);
/*парсим данные от сервера....
вопрос отсался открытым, как для анонимной функции указать
responseType = 'json'??? (this.responseType = 'json'  не прошел...)
*/
function GetPersons(data) {
    userList = JSON.parse(data);
    console.log(userList)
    CreateUserList(userList);
}
/*создаем DOM элементы юзеров*/
function CreateUserList(userList) {
    for (let i = 0; i < userList.length; i++) {
        CreateUser(userList[i]);
    }
}
function CreateUser(userData){
    let newUserElem = document.createElement('div');
    newUserElem.innerHTML = userData.name;
    newUserElem.className = 'user';
    newUserElem.addEventListener('click', (e, p = userData) =>{
        GetPersonalData(p)
    });
    document.getElementById('usersList').appendChild(newUserElem);
}
/*наполняем версональные данные по выбранному юзеру*/
function GetPersonalData(userData) {
    document.getElementById('b2').style.display = 'block';
    ClearPostsList();

    let table = document.getElementById('pesronalData')
        .getElementsByClassName('col2');
        table[0].innerHTML = userData.name;
    table[1].innerHTML = userData.username;
    table[2].innerHTML = userData.address.city + ', ' + userData.address.street;
    table[3].innerHTML = userData.email;
    table[4].innerHTML = userData.phone;
    table[5].innerHTML = userData.website;

    currentUserId = userData.id;
}
/*обработчик для кнопки Show Posts*/
function GetPostsHandler(userId){
    let postsRequestData = new XMLHttpRequest();
    postsRequestData.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200) GetPosts(this.response)
    }

    postsRequestData.open('GET', "https://jsonplaceholder.typicode.com/posts", true, userId);
    postsRequestData.send();
}
/*парсим данные сервера*/
function GetPosts(data) {
    postList = JSON.parse(data);
    console.log(postList);
    CreatePostList(postList);
}
/*создаем эелементы DOM, наполняем*/
function CreatePostList(postList){
    for (let i = 0; i < postList.length; i++) {
        CreatePost(postList[i]);
    }
}
function CreatePost(postData) {
    document.getElementById('b3').style.display = 'block';
    let newPostElem = document.createElement('div');
    newPostElem.className = 'post';
    let postHead = document.createElement('h6');
    postHead.innerHTML = postData.title;
    let postBody = document.createElement('p');
    postBody.innerHTML = postData.body;
    newPostElem.appendChild(postHead);
    newPostElem.appendChild(postBody);
    document.getElementById('postList').appendChild(newPostElem);
}
function ClearPostsList() {
    document.getElementById('b3').style.display = 'none';
    let posts = document.getElementById('postList').children;
    for (let i = 0; i < posts.length; i++) {
        posts[i].remove();
    }
}