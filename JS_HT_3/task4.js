/*Задание 4
Создать массив аудиторий академии. Объект-аудитория со-
стоит из названия, количества посадочных мест (от 10 до 20) и
названия факультета, для которого она предназначена.
    Написать несколько функций для работы с ним.
1. Вывод на экран всех аудиторий.
2. Вывод на экран аудиторий для указанного факультета.
3. Вывод на экран только тех аудиторий, которые подходят для
переданной группы. Объект-группа состоит из названия,
    количества студентов и названия факультета.
4. Функция сортировки аудиторий по количеству мест.
5. Функция сортировки аудиторий по названию (по алфа-
виту).*/

/*массив аудиторий*/
var audiences = [
    {id: "A", sits: 50, faculty: "Electric"},
    {id: "B", sits: 70, faculty: "Mechanic"},
    {id: "C", sits: 50, faculty: "Computer"},
    {id: "D", sits: 70, faculty: "Philosophy"},
    {id: "E", sits: 30, faculty: "Computer"},
    {id: "F", sits: 30, faculty: "Computer"},
    {id: "G", sits: 55, faculty: "Computer"}
]

/*вывод в документ*/
let printAudience = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(`Audience: "${arr[i].id}", sits: "${arr[i].sits}, faculty: "${arr[i].faculty}"<br>`);
    }
}

/*Можно запросить название факультета через prompt (закомментил)
*циклом по факультетам выводим только нужные*/
/*let faculty = prompt(`Enter faculty name:`)*/
let getFacultyAudience = (arr, name) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].faculty===/*name*/ "Computer")
            document.write(`${arr[i].id}<br>`)
    }
}

/*группа*/
let group = {name: "CS1202", students: 45, faculty: "Computer"}

/*по количеству посадочных мест выбираем выводим нужные в документ*/
let getGroupAudience = (arr, group) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].faculty===group.faculty && arr[i].sits>=group.students)
            document.write(`${arr[i].id} --> free sits: ${arr[i].sits-group.students} <br>`)
    }
}

/*сортировка по кол-ву мест по убыванию*/
function SortBySitsMin(arr){
    return arr.sort((a,b)=>a.sits-b.sits);
}
/*сортировка по кол-ву мест по возрастанию*/
function SortBySitsMax(arr){
    return arr.sort((a,b)=>b.sits-a.sits);
}
/*сортировка по названию*/
function SortById(arr){
    return arr.sort();
}


printAudience(audiences);
getFacultyAudience(audiences);
getGroupAudience(audiences, group);
printAudience(SortBySitsMin(audiences));