


/*function MyMin(list){
    return Math.min(list);
}

alert(Math.min(...arr));
alert(Math.max(...arr));*/
/*
const arr3 = [1, 3, 5, 7, 9, 11, 12];
const arr4 = [1, 2, 3, 4, 5, 10, 12];

function compareNumbers(a,b){
    return a-b;
}

function mergeArrays(arr1,arr2) {
    return [...new Set(arr1.concat(arr2).sort(compareNumbers))];
}

console.log(arr3);
console.log(arr4);
console.log(mergeArrays(arr3,arr4));

function print(){
    for (let i = 0; i < arguments.length; i++) {
        document.write(`<b>${i}</b>: ${arguments[i]} <br/>`)
    }
}
print(1, 4,'text',Date.now(), 2.34);*/

/*
let min;
let c = parseInt(prompt(`count:`,2));
if (c===2)
{
    min = function (a,b)
    {return(a<b)?a:b;}
}
else{
    min = function (a,b,c) {
        let m = (a<b)? a:b;
        return (m<c)? m:c;
    }
}
console.log(`min=${min(9,47,5)}`);*/

/*let int = 6;
console.log(int.toString(2));*/

/*2. Запросить у пользователя число от 0 до 9 и вывести ему
спецсимвол, который расположен на этой клавише (1–!,2–@, 3–# и т. д).*/

/*
value = parseInt(prompt("Enter number [0-9]:"));
confirm(String.fromCharCode(value+32));*/

/*let value = confirm("Do this???");
alert(value?"Confirm":"Canceled");*/

let value = confirm("Do this???");
alert(value?"Confirm":"Canceled");