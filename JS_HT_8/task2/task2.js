let search = document.getElementById('searchAPI');
search.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') UserSearch();
});
function UserSearch() {
    let userLogin = document.getElementById('searchAPI').value;
    console.log(userLogin)
    fetch( `https://api.github.com/users/${userLogin}`)
        .then(function (resp) {return resp.json()})
        .then(function (data) {
            console.log(data);
            let userId = data.id;
            document.getElementById('name').innerHTML = data.name==null? 'empty' : data.name;
            document.getElementById('login').innerHTML = data.login;
            document.getElementById('ava').src = `https://avatars.githubusercontent.com/u/${userId}?v=4`;
            document.getElementById('url').innerHTML = data.url;
            document.getElementById('blog').innerHTML = data.blog.length<1?'empty':data.blog;
            document.getElementById('city').innerHTML = data.location==null?'empty':data.location;
            document.getElementById('email').innerHTML = data.email==null?'empty':data.email;
            document.getElementById('followers').innerHTML = data.followers;
            document.getElementById('following').innerHTML = data.following;
        })
        .catch(function () {});
}