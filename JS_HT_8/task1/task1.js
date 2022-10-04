let srchLbl = document.getElementById('srchLbl');
let searchAPI = document.getElementById('searchAPI');
document.getElementById('day').innerHTML = (new Date().toLocaleString('en-us', {  weekday: 'long' }));
document.getElementById('currentDate').innerText = (new Date()).toLocaleDateString();
GetByDefault('New York');

/*слушатель на клик по иконке поиск внутри:
* вытягиваем по API и раскидываем по документу
* изначальо по дефолту грузится Нью Йорк, соответствующая функция ниже*/
srchLbl.addEventListener('click', GetByInput);
searchAPI.addEventListener('keydown', function (e){
    console.log(e.key)
    if (e.key == "Enter") GetByInput();
})

function GetByInput() {
    let currentCity = document.getElementById('searchAPI').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=109e7252d84a3b6299c1cc835e6a9c53`)
        .then(function (resp) {return resp.json()})
        .then(function (data) {
            console.log(data);
            document.getElementById('cityName').innerHTML = data.name;
            getDataForMainBlock(document.getElementsByTagName('td'),
                document.getElementById('temperature'), data);
            getIcon(document.getElementById('weather'),
                document.getElementById('ico'),data)
        })
        .catch(function () {});
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=109e7252d84a3b6299c1cc835e6a9c53`)
        .then(function (resp) {return resp.json()})
        .then(function (data) {
            console.log(data);
            for (let i = 0; i < 6; i++) {
                document.getElementsByClassName('time')[i].innerHTML =
                    data.list[i].dt_txt.split(' ')[1].slice(0,5);

                document.getElementById('forecatsColl').getElementsByTagName('img')[i].src =
                    `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;

                document.getElementsByClassName('forecasts')[i].innerHTML =
                    data.list[i].weather[0].main;

                document.getElementsByClassName('temp')[i].innerHTML =
                    temperatureConverter(data.list[i].main.temp);

                document.getElementsByClassName('wind')[i].innerHTML = data.list[i].wind.speed;
            }
        })
        .catch(function () {});
}
function GetByDefault(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=109e7252d84a3b6299c1cc835e6a9c53`)
        .then(function (resp) {return resp.json()})
        .then(function (data) {
            console.log(data);
            document.getElementById('cityName').innerHTML = data.name;
            getDataForMainBlock(document.getElementsByTagName('td'),
                document.getElementById('temperature'), data);
            getIcon(document.getElementById('weather'),
                document.getElementById('ico'),data)
        })
        .catch(function () {});

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=109e7252d84a3b6299c1cc835e6a9c53`)
        .then(function (resp) {return resp.json()})
        .then(function (data) {
            console.log(data);
            for (let i = 0; i < 6; i++) {
                document.getElementsByClassName('time')[i].innerHTML =
                    data.list[i].dt_txt.split(' ')[1].slice(0,5);

                document.getElementById('forecatsColl').getElementsByTagName('img')[i].src =
                    `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;

                document.getElementsByClassName('forecasts')[i].innerHTML =
                    data.list[i].weather[0].main;

                document.getElementsByClassName('temp')[i].innerHTML =
                    temperatureConverter(data.list[i].main.temp);

                document.getElementsByClassName('wind')[i].innerHTML = data.list[i].wind.speed;
            }
        })
        .catch(function () {});
}
/*преобразование кельвинов в цельсии....позже нашел, что можно было цельсии тянуть с сайта сразу*/
function temperatureConverter(kelvin) {
    return `${Math.floor(kelvin-273)}&#8451`;
}
/*вытягиваем из JSON данные для вервого блока.
* Для второго блока отдельно по функциям не раскидывал....экономил время*/
function getDataForMainBlock(elemTable, elemA, data) {
    elemTable[1].innerHTML = temperatureConverter(data.main.temp_min);
    elemTable[3].innerHTML = temperatureConverter(data.main.temp_max);
    elemTable[5].innerHTML = data.wind.speed;
    elemA.innerHTML = temperatureConverter(data.main.temp);
}
function getIcon(elemH, elemImage, data) {
    elemH.innerHTML = data.weather[0].main;
    elemImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
}


