/*вешаем обработчик на кнопку для форматирования введенного текста*/
document.getElementsByClassName('wrapper')[0].addEventListener('click', Format);
/*получаем текст из введенного блока, в блоке TRY парсим если будет введено что-то не п формату JSON
*в CATCH выведем ошибку, если все ОК преобразуем строку опять JSON с отсутоп 4*/
function Format(){
    let input = document.getElementById('input');
    try {
        let jsonToCorrect = JSON.parse(input.value);
        document.getElementById('output').value =
            JSON.stringify(jsonToCorrect, null, 4);
    }
    catch (e) {
        alert(`${e}`);
    }

}
//let jsonString = [{"id":1,"name":"Mike","age":"32"}]