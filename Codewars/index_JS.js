/*var findMissing = function (list) {
    return (list[0]+list[list.length-1])*(list.length + 1) / 2 - list.reduce(
        (prev, next)=>prev+next,0);
}

console.log(findMissing(([1, 3, 4]), 2))*/

/*let ls = [0, 1, 3, 6, 10];*/

/*
function partsSums(ls) {
    let sum = ls.reduce((prev, next)=>prev+next,0);
    let arr = [];
    for (const i in ls) {
        arr.push(sum-i);
    }
    return arr.push(0);
}

console.log(partsSums([0, 1, 3, 6, 10]));*/


/*function operation(a,b,func){
    const  result = func(a,b);
    console.log(result);
}

function MyMin(a,b) {
    return a>b?b:a;
}

function MyMod(a,b) {
    return a%b;
}

operation(2,4, MyMin);
operation(43,4, MyMod);*/

/*
let calc = (function (){
    let data = {arr: [0]};
    return{
        MySum: function (n){
            return n.reduce((prev, next)=>prev+next,0);
        },
        MyMax: function (n){
            return n.sort((a,b)=>b-a)[0];
        }
    }
})();

console.log(calc.MyMax([4,5,9,8,7]));
console.log(calc.MySum([4,5,9,8,7]));*/

/*
let EvenOdd = (lowB,upB,isEven)=>{
    let range = [];
    for (let i = lowB; i < upB+1; i++) {
        if (isEven&&i%2===0) range.push(i);
        if (!isEven&&i%2!==0) range.push(i);
    }
    return range;
}

console.log(EvenOdd(0,10,false));
console.log(EvenOdd(0,10,true));*/

/*
let calculator = (function (){
    let a = 0, b = 0;
    return {
        sum: function (a,b){
            return a+b;
        },
        sub: function (a,b){
            return a-b;
        },
        mult: function (a,b){
            return a*b;
        },
        div: function (a,b){
            return b===0? "Division by zero" : a/b;
        }
    };
})();

console.log(calculator.sum(2,3));
console.log(calculator.sub(2,3));
console.log(calculator.mult(2,3));
console.log(calculator.div(2,3));
console.log(calculator.div(2,0));*/


/*let point1 = {x: 10,y: -5}
let point2 = {x: 10,y: 5}
let pointA = {x: 0,y: 0};
let pointB = {x: 30,y: -10}

let rect1 = {
    leftUpPoint: pointA,
    rightLowPoint: pointB
}

let RectFunc = (function (){
    let resizeLength, resizeWidth, resizeHeight, moveX, moveY, moveXY;
    return{
        print: function (rect){
            console.log(`Left Upper Point: ${rect.leftUpPoint.x}:${rect.leftUpPoint.y}\nRight Lower Point: ${rect.rightLowPoint.x}:${rect.rightLowPoint.y}`);
        },
        rectWidth: function (rect){
            console.log(`Rectangle width: ${Math.abs(rect.leftUpPoint.x-rect.rightLowPoint.x)}`);
        },
        rectHeight: function (rect){
            console.log(`Rectangle height: ${Math.abs(rect.leftUpPoint.y-rect.rightLowPoint.y)}`);
        },
        rectArea: function (rect){
            console.log(`Rectangle area: ${Math.abs(rect.leftUpPoint.x-rect.rightLowPoint.x)*
            Math.abs(rect.leftUpPoint.y-rect.rightLowPoint.y)}`);
        },
        rectPerimeter: function (rect){
            console.log(`Rectangle perimeter: ${2*Math.abs(rect.leftUpPoint.x-rect.rightLowPoint.x)+
            2*Math.abs(rect.leftUpPoint.y-rect.rightLowPoint.y)}`)
        },
        rectHeightResize: function (rect, resizeLength){
            rect.leftUpPoint.y+=resizeLength;
        },
        rectWidthResize: function (rect, resizeLength){
            rect.leftUpPoint.x+=resizeLength;
        },
        rectResize: function (rect, resizeWidth, resizeHeight){
            rect.leftUpPoint.y+=resizeHeight;
            rect.leftUpPoint.x+=resizeWidth;
        },
        moveX: function (rect, moveX){
            rect.leftUpPoint.x+=moveX;
            rect.rightLowPoint.x+=moveX;
        },
        moveY: function (rect, moveY){
            rect.leftUpPoint.y+=moveY;
            rect.rightLowPoint.y+=moveY;
        },
        moveXY: function (rect, moveXY){
            rect.leftUpPoint.x+=moveXY;
            rect.rightLowPoint.x+=moveXY;
            rect.leftUpPoint.y+=moveXY;
            rect.rightLowPoint.y+=moveXY;
        },
        isPointIn: function (rect, point){
            let isX = point.x > rect.leftUpPoint.x && point.x < rect.rightLowPoint.x;
            let isY = point.y < rect.leftUpPoint.y && point.y > rect.rightLowPoint.y;
            console.log(`Point: ${point.x}:${point.y} is ${(isX&&isY)?'inside':'outside'} the rectangle`);
        }
    }
})();

RectFunc.print(rect1);
RectFunc.rectWidth(rect1);
RectFunc.rectHeight(rect1);
RectFunc.rectArea(rect1);
RectFunc.rectPerimeter(rect1);
RectFunc.rectHeightResize(rect1, 10);
RectFunc.print(rect1);
RectFunc.rectWidthResize(rect1,10);
RectFunc.print(rect1);
RectFunc.rectResize(rect1,-10,-10);
RectFunc.print(rect1);
RectFunc.moveX(rect1,10);
RectFunc.print(rect1);
RectFunc.moveY(rect1,10);
RectFunc.print(rect1);
RectFunc.moveXY(rect1,-10,-10);
RectFunc.print(rect1);
RectFunc.isPointIn(rect1, point1);
RectFunc.isPointIn(rect1, point2);*/

/*let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random()*100));
}

let ArrOperation = (arr, func) =>{
    const result = func(arr);
    document.write(result);
}

let print = (arr) => {
        for (const arrElement of arr) {
        document.write(arrElement+"\n")
    }
}

let arrOdd = (arr) => {
    for (const arrKey of arr) {
        if (arrKey%2===0) document.write(arrKey+"\n");
    }
}

let arrSum = (arr) => {
    return arr.reduce((prev, next)=>prev+next);
}

let arrMax = (arr) => {
    return Math.max.apply(null, arr);
}

let add = (arr, index, value) => {
    arr.splice(index, 0, value);
}

let del = (arr, index) => {
    arr.splice(index,1);
}
ArrOperation(arr, print);
add(arr, 3, 20);
ArrOperation(arr, print);
del(arr, 3, 20);
ArrOperation(arr, print);*/


/*let arr1 = [];
let arr2 = [];
for (let i = 0; i < 5; i++) {
    arr1.push(Math.floor(Math.random()*10));
    arr2.push(Math.floor(Math.random()*10));
}

let print = (arr) => {
    for (const arrElement of arr) {
        document.write(arrElement);
    }
    document.write('\n\n\n');
}

let conc = (arr1,arr2) => {
    return new Set(arr1.concat(arr2));
}

print(arr1);
print(arr2);
let unic = (arr1,arr2) => {
    return arr1.filter(i=>!arr2.includes(i));
}
print(unic(arr1,arr2));*/

/*let fruit = [ "apple", "pineapple", "orange", "cherry", "strawberry", "lemon", "kiwi" ];

let print = (arr) => {
    document.write("<ul>")
    for (const arrElement of arr.sort()) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write("</ul>")
    document.write("<br /><br />");
}

let GetFruit = (arr, name) => {
    return arr.findIndex(f=>f==name.toLowerCase());
}

print(fruit);

document.write(GetFruit(fruit, "LemOn1"))*/

/*const str1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quisquam23.';
const str2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quisquam1.';

let Comparer = ({length:l1}, {length: l2}) => {
    return l1>l2?1:l1==l2?0:-1;
}

let CamelCase = (str) => {
    return str[0].toUpperCase()+str.slice(1);
}

let VowelsCount = (str) => {
    return str.match(/[euioa]/ig).length;
}

let ClearSpam = (str) => {
    let spam = /(ipsum)|(sit)|(elit)/ig;
    return str.replace(spam, "");
}

let Truncate = (str, max) => {
    return str.length>max? str.slice(0,max-3)+'...':str;
}

let IsPalindrom = (str) => {
    return str.split('').reverse().join('') === str;
}

let WordsCount = (str) => {
    return str.split(' ').length;
}

let WordsMaxLength = (str) => {
    return str.split(' ').map(i=>i.length).sort((a,b)=>b-a)[0];
}

let AverageWordLength = (str) => {
    return str.split(' ').map(i=>i.length).reduce((prev, next)=>prev+next)/WordsCount(str);
}

let CharPosition = (str, char) => {
    let charIndexes = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i]==char){
            charIndexes.push(i);
        }
    }
    for (let i = 0; i < charIndexes.length; i++) {
        console.log(`${i+1}-->${charIndexes[i]}`)
    }
    console.log(`Count: ${charIndexes.length}`);
}

CharPosition(str1, 'i');*/

/*
console.log(Comparer(str1,str2));
console.log(CamelCase("apple"));
console.log(VowelsCount("Oh mama-mia!!!"));
console.log(clearSpam(str1));
console.log(Truncate(str1,8));
console.log(IsPalindrom("annrrnna"));
console.log(WordsCount(str1));
console.log(WordsMaxLength(str1));
console.log(AverageWordLength(str1));
*/

/*class machine{
    ["font-size"];
    color;
    ["font"];
    constructor(fontSize, color, fontFamily) {
        this["font-size"] = fontSize;
        this.color = color;
        this["font"] = fontFamily;
    }
    print(text){
        let element = document.getElementsByClassName('machine');
        element.style["font-size"] = this["font-size"];
        element.style['color'] = this.color;
        element.style['font'] = this["font"];
        element.innerText = text;
        document.write(element.innerText);
    }
}*/

/*class machine{
    fontSize;
    color;
    fontFamily;
    constructor(fontSize, color, fontFamily) {
        this.fontSize = fontSize;
        this.color = color;
        this.fontFamily = fontFamily;
    }
    print(text){
        document.write(`<p style="font-size: ${this.fontSize}; color:${this.color}; font-Family: ${this.fontFamily};">${text}</p>`);
    }
}

const car = new machine("18px", "green", "Andale Mono");

car.print("Lorem ipsum dolor sit amet.")*/

/*class machine{
    constructor(fontSize, color, fontFamily) {
        this.fontSize = fontSize;
        this.color = color;
        this.fontFamily = fontFamily;
    }
    changeCSS(text){
        let element = document.getElementById('machine');
        element.style.fontSize = this.fontSize;
        element.style.color = this.color;
        element.style.fontFamily = this.fontFamily;
        element.innerText = text;
    }
}

const car = new machine("18px", "red", "Andale Mono");
car.changeCSS("Lorem ipsum dolor sit amet.");*/

/*class News{
    constructor(header, text, tagArr, publishDate) {
        this.header = header;
        this.text = text;
        this.tagArr = tagArr;
        this.publishDate = new Date(publishDate);
    }
    print(){
        document.write(`<h3>${this.header}</h3>`);
        console.log(this.publishDate);
        let d = this.publishDate.getDate();
        let m = this.publishDate.getMonth();
        let y= this.publishDate.getFullYear();
        let dateDiff = (new Date()).getDate() - d;
        function pad(n){
            n=n+'';
            return n.length >= 2 ? n : new Array(2 - n.length + 1).join('0') + n;
        }
        dateDiff==0? document.write(`<a style="font-size: 13px">today</a>`)
            : dateDiff>=1 && dateDiff<=7? document.write(`<a style="font-size: 13px">${dateDiff} days ago</a>`)
                : document.write(`<a style="font-size: 13px">${pad(d)}/${pad(m+1)}/${y}</a>`);
        document.write(`<p>${this.text}</p>`);
        for (let i = 0; i < this.tagArr.length; i++) {
            document.write(`<a>${this.tagArr[i]}</a> `);
        }

    }
}
let h = "Lorem ipsum dolor sit?"
let t = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, nulla, quas? Aut autem " +
    "beatae dicta dolores impedit iusto laborum maxime minus nam perferendis, perspiciatis placeat, " +
    "quidem quis repellendus sequi sint.";
let tg = ["#lorem", "#ipsum", "#text"];
let dt = "2022-06-20";

const news1 = new News(h,t,tg,dt);
news1.print();*/


/*let body = document.getElementsByTagName('body')[0];
let out = document.getElementById('out');
body.onclick = function (e) {
    out.innerText = e.target.nodeName;
}*/

/*
let elem = document.getElementById('colorBlock');
elem.style.backgroundColor = 'green';
elem.style.width = '100px';
elem.style.height = '100px';
let body = document.getElementById('base');
body.addEventListener('mousedown', function (e) {
    elem.style.width = e.pageX + 'px';
    console.log(elem.style.width)
    elem.style.height = e.pageY + 'px';
    console.log(elem.style.height)
})
*/

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,0];
let arr = [...arr2,...arr1];
Object.values(arr).forEach(v=>{console.log(v)});




