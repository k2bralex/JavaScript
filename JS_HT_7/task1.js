let currentColor = document.getElementById('color');
let colorList = document.getElementById('colorList');
let colorObject = {id: '#000000', name: 'black', rgb: 'r: 0, g: 0, b: 0'};
/*проверим куки, загрузим, если были*/
if (document.cookie.length>0) setColorFromCookie();

/*слушатель на color input, замена значений в форме и доавление в лист, если не было такого ранее*/
currentColor.addEventListener('change', function (e){
    GetColorObject();
    document.getElementById('colorId').value = colorObject.id;
    document.getElementById('colorName').value = colorObject.name;
    document.getElementById('colorRGB').value = colorObject.rgb;
    AddColorToColorList(colorObject);
});
/*слушатель на select лист, навигация по списку*/
colorList.addEventListener('change', function (e) {
    document.getElementById('colorId').value = ntc.name(e.target.value)[0];
    document.getElementById('colorName').value = ntc.name(e.target.value)[1];
    document.getElementById('colorRGB').value = hexToRgb(ntc.name(e.target.value)[0]);
    currentColor.value = ntc.name(e.target.value)[0];
})
/*доавление новго цвета в лист*/
function AddColorToColorList(colorObj) {
    if (IsColorInList(colorObj)) return;
    let newOptionTag = document.createElement('option');
    newOptionTag.value = colorObj.id;
    newOptionTag.textContent = colorObj.name;
    document.getElementById('colorList').appendChild(newOptionTag);
    setCookies();
}
/*проверочная, есть ли текущий цвет в листе*/
function IsColorInList(colorObj) {
    let colorListItems = document.getElementById('colorList').getElementsByTagName('option');
    for (let i = 0; i < colorListItems.length; i++) {
        if (colorListItems[i].value === colorObj.id) return true;
    }
    return false
}
/*объект для работы с формой*/
function GetColorObject() {
    colorObject.id = ntc.name(currentColor.value)[0];
    colorObject.name = ntc.name(currentColor.value)[1];
    colorObject.rgb = hexToRgb(ntc.name(currentColor.value)[0]);
}
/*перевод HEX значения цвета в RGB*/
function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? `r: ${parseInt(result[1], 16)}, g: ${parseInt(result[2], 16)}, b: ${parseInt(result[3], 16)}`
        : null;
}
/*запись в куки*/
function setCookies() {
    let expire = new Date();
    expire.setHours(expire.getHours() + 3);
    document.cookie = `id=${colorObject.id};expires=` + expire.toUTCString() + ";";
    document.cookie = `name=${colorObject.name};expires=` + expire.toUTCString() + ";";
    document.cookie = `rgb=${colorObject.rgb};expires=` + expire.toUTCString() + ";";
}
/*извлечение куки*/
function getCookies() {
    let cookies = {};
    let all = document.cookie;
    if (all === "")
        return cookies;
    let list = all.split("; ");
    for(let i = 0; i < list.length; i++)
    {
        let cookie = list[i];
        let p = cookie.indexOf("=");
        let name = cookie.substring(0,p);
        let value = cookie.substring(p+1);
        value = decodeURIComponent(value);
        cookies[name] = value;
    }
    return cookies;
}
/*установка значений из куки*/
function setColorFromCookie() {
    let obj = getCookies();
    colorObject = obj;
    document.getElementById('colorId').value = colorObject.id;
    document.getElementById('colorName').value = colorObject.name;
    document.getElementById('colorRGB').value = colorObject.rgb;
    currentColor.value = colorObject.id;
    colorList.children[0].value = colorObject.id;
    colorList.children[0].textContent = colorObject.name;
}