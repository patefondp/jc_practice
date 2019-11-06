
'use strict'

function format (response){
return response.json();
};

function render1 (posts){
    var html = "";
    for (var post of posts){
        html += '<div class="post">';
        html += "<p>" + post.title + "</p>"
        html += "</div>"
    }
    return html;
};

function render2 (str){
    var container = document.querySelector('#list-posts');
    container.innerHTML = str; 
    console.dir (container);
};
function showPost() {
fetch('http://blog.api.axenov-it.com/posts')
.then(format)
.then(render1)
.then(render2);
}
var btn = document.querySelector('#render-post')

console.dir(btn);

btn.onclick = showPost;


// "use strict"
// function registration () {
//     console.log ('hi registration')
// };
// function pay () {
//     console.log ('hi pay')
// };
// function add () {
//     console.log ('hi add')
// };



// function add () {

// }

// var a = {name: "vasa", age: 25};
// var b = a;
// b.name = "pitya";
// console.log(a)

// var ar = [1, 5, 8];
// var ar2 = ar;
// ar2.push(5555);
// console.log(ar);


// function sum(){

// }
// var ar = [10, 15];
// function sum (data) {
// var result = 0;
// for(var num of  data) 
//     result += num;
//     return result;
// }

// sum(ar);
// console.log(sum(ar));


// function sum(a, b, c) {
//     return (a + b) * c;
//   }
  
//   let result = sum(2, 2, 2);
//   alert( result );


// (function () {
//     console.log ("мы стрелочная функция")
// })();

// let s = () => console.log ("мы стрелочная функция");

// s();



// for (let i = 2; i <= 10; i++) {
//     if (i % 2 != 0) {
//       alert( i );
//     }
//   }

// let name = ["Сергей", "Виктор", "Владимир", "Всеволод"];

// console.log (name.length);
// for (let i = 3; i >= 0; i--) {
//     console.log(name[i]);
// };

// 'use strict'

// var names = ['vasa', 'pitya', 'anya', 'kolya', 'vova'];
// var cities = ['dnepr', 'odessa', 'kiev', 'lviv'];

// function renderList(data, containerId) {
//     var container = document.querySelector(containerId);
    
//     var res = '';
    
//     for( var item of data) {
       
//         res+=`<Li>${item}</li>`;
//     };
    
//     container.innerHTML = res; 
// }
// renderList(cities, '#cities');
// renderList(names, '#names');




// var containerName = document.querySelector('#names');

// // console.log(containerName);

// // var res = ' ';

// // for( var name of names) {
   
// //     res+=`<Li>${name}</li>`;
// // };
// // console.log (res);

// containerName.innerHTML = res; 

// var containerSities = document.querySelector('#sities');

// console.log(containerSities);

// var res = ' ';

// for( var name of sities) {
   
//     res+=`<Li>${sities}</li>`;
// };
// console.log (res);

// containerSities.innerHTML = res; 


// console.log(container);

// var res = ' ';

// for( var name of names) {
   
//     res+=`<Li>${name}</li>`;
// };
// console.log (res);

// container.innerHTML = res; 

// console.log(container);

// var res = ' ';

// for( var name of names) {
   
//     res+=`<Li>${name}</li>`;
// };
// console.log (res);

// container.innerHTML = res; 

// // for( var i in names) {
//     console.log (i);
// }


// let car = {
// speedMax: allSpeed,
// color: "white",
// yers: 10,
// name: "BMW"
// }

// let car2 = {
// speedMax: 320,
// color: colorChange,
// yers: 15,
// name: "AUDI"
// }


// function allSpeed(maxSpeed){
// maxSpeed.speedMax = 300;
//     console.log(car.speedMax);
// };

// allSpeed(car);
// allSpeed(car2);
// console.log(car, car2);

// function colorChange(theColor) {
//     theColor.color = "green";
//     console.log(car.color);
// };

// colorChange(car);
// colorChange(car2);
// console.log (car);
// console.log (car2);

// let userName = "Коля";

// alert(userName);

// function newName () {
//     userName = "Вася"
//     alert(userName);
// };
// newName();

// let car = {
//     color: "black",
//     maxSpeed: 240,
//     type: "mcv"
// };
// let car2 = {
//     color: "black",
//     maxSpeed: 280,
//     type: "mcv"
// };

// function speedChange(msp) {
//     msp.maxSpeed = 300;
// };
// function colorChange(newColor) {
//     newColor.color = "red";
// };

// speedChange(car);
// speedChange(car2);
// colorChange(car);
// console.log("car:" +car.maxSpeed);
// console.log("car:" +car2.maxSpeed);
// console.log("car:" + car.color);







// let autoFirst = {
// color: "red",
// maxSpeed: 240,
// cost: 5000000,
// };

// if(autoFirst.cost >= 1000000){ 
//     console.log ("автомобиль дорогой");
// } else if(autoFirst.cost >=500000 && autoFirst.cost <=10000000){
//     console.log ("доступный автомобиль");
// }else{
//     console.log ("дешевый авто")
// };




// 'use strict'

// var a = +prompt("enter number a");
// var o = prompt("enter operation");
// var b = +prompt("enter number b");
// var result = 0;

// // if(o === "+") {
// // result = a + b
// // }
// // if(o === "-") {
// // result = a - b
// // }
// // if(o === "*") {
// // result = a * b
// // }
// // if(o === "/") {
// // result = a / bß
// // }
// // alert('your answer' + result);

// switch (o) {
// case "+": result = a + b; break;
// case "-": result = a - b; break;
// case "*": result = a * b; break;
// case "/": result = a / b; break;
// }





// console.log(result);
