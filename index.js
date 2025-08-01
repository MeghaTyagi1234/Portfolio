// console.log("sejal tyagi");
// console.log("This is my first project");
// let fname="guddan";
// console.log(fname);
// let interestrate=23.4;
// interestrate=2;
// console.log(interestrate);

// const interestRate=3;
// console.log(interestRate);
// let age=25;
// typeof age;
// console.log(typeof age);
// let Fname=undefined;
// console.log(typeof Fname);
// let color=null;
// console.log(typeof color);
// let person = {
//     name: "John",
//     age: 30,
//     occupation: "Developer"
//     };
//     console.log(person);
//     person.name="priya";
//     console.log(person.name);
//     person.occupation="Businessman";
//     console.log(person.occupation);
//     function greet(name1,name2){
//         console.log("Hello, how are you?"+" "+ name1+" "+name2);
//     }
//     greet("priyanka","sejal");
//     function square(num){
// return num*num;
//     }
// console.log(square(2));
// let age1=20;
// if(age>18){
//     console.log("you are eligible to vote");
// } 
// if(age>18){
//     console.log("you are not eligible to vote");
// }
// let mode="dark";
// let colour;
// if(mode==="dark"){
//     colour="black";
// }
// if(mode==="light"){
//     colour="white";
// }
// console.log(colour);
// let n=2;
// if(n/2){
//     console.log("number is even");
// }
// else{
//     console.log("number is odd");
// }
// //alert("hello guys");
// //prompt("firstname");
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }
// let j=1;
// while(j<=5){
//     console.log("megha");
//     j++;
// }
// let k=30;
// do{
//     console.log(k);
//     k++;
// } while(k<=20);
// let str="amit tyagi";
// for(let l of str){
//     console.log(l);
// }
// let p="javascript";
// let size=0;
// for(let m of p){
//     console.log(m);
//     size++;
// }
// console.log(size);
// let student={
//     Name1:"akshi",
//     age:20,
//     marks:90,
//     cgpa:7.5
// };
// for(let key in student){
//     console.log("key", key,"value",student[key]);
// }
// for(let q=1;q<=100;q++){
//     if(q%2===0){
//         console.log(q);
//     }
// }
// let obje = {
//     naam:"aashu",
//     age:20,
// };
// let output = `the name is ${obj.naam} and age is ${obj.age}`;
// console.log(output);
// let stri = "JAVASCRIPT IS A PROGRAMMING LANGUAGE";
// console.log(stri.toLowerCase());
// let strin = "1234567";
// console.log(strin.slice(1,6));
// let str3 = "megha";
// console.log(str3.replace("m","s"));
// let marks = [85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum=sum+val;
// }
// console.log(sum);
// let avg = sum/marks.length;
// console.log(avg);
// console.log("\n");
// let items = [250,645,300,900,50];
// let idx =0;
// let r;
// for(let price of items){
//     console.log(`price at index ${idx} is ${price}`);
//     idx++;
//     let offer = price/10;
// }
// //let vegies = ["potato","chilli","carrot","peas"];
// //console.log(vegies.push("kerela"));
// //for(let k=0;k<vegies.length;k++){
// //console.log(vegies[k]);
// //console.log(vegies.toString()); 
// //}
// let vegies = ["potato","chilli","carrot","peas"];

// let fruits = ["orange","apple","banana","cherry","beetroot"];
// let mix = fruits.concat(vegies);
// console.log(mix);
// console.log(fruits.unshift("mango"));
// console.log(fruits);
// fruits.shift("banana");
// console.log(fruits);
// console.log(fruits.slice(0,2)); //slice method
// console.log(fruits);
// fruits.splice(1,2,"papaya","pineapple");
// console.log(fruits);
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//  console.log(companies);
//  console.log(companies.shift());
//  console.log(companies);
//  companies.splice(3,1,"Ola");
//  console.log(companies);
//  companies.push("Amazon");
//  console.log(companies);
//  function add(a1,a2){
//     console.log(a1+a2);
//  }
//  add(1,2);
//  const arrowmul = (c,e)=>{
//     console.log(c*e);
//  }
//  arrowmul(3,2);
//  console.log(arrowmul);
// //  function countvowels(str){
// //     let count=0;
// //     for(let char of str){
// //         if(char==='a' || char==='e' || char==='i'|| char==='o' || char==='u'){
// //             count=
// //         }
// //     }
// //  }
// let array = ["megha","sejal","aashu","prajwal"];
// array.forEach(function print(val,idx,array){ //all the value of aaray is store in val variable.Her idx specifies 
// // the index of an array elements.It contains three values,val,index and array.
// console.log(val.toUpperCase(),idx,array);
// })
// let digit = [1,2,3,4,5,6];
// digit.forEach(function square(n){
//     console.log(n*n);
// })
// let counting = [1,2,3,4];
// counting.map(function (ser){
//     console.log(ser);
// });
// let even = [5,43,5,6,72,2,4,6];
// let neweven = even.filter(function(num){
//     return num%2===0;
// });
// console.log(neweven);
// let redarray = [1,4,2,3];
// let max = redarray.reduce(function(pre,cur){
//     return pre>cur? pre:cur;
// });
// console.log(max);
// let marks1 = [90,99,98,94,34];
// let newmarks = marks1.filter(function(morenumber){
//     return morenumber>90;
// })
// console.log(newmarks);
// console.log("\n");

// // let UserInput=prompt("enter a number");
// // //console.log(UserInput);
// // let ar = [];
// // for(let z=0;z<=UserInput;z++){
// //     ar[z]=z;
// // } 
// // console.log(ar);
// // ar.reduce(function(prev,curr){
// //     return prv+curr;
// // })
// // console.log(ar);
// // window.console.log("sambhav");
// // console.dir(window.document);
// // console.dir(document.body.firstchild);
// // let div = document.querySelector("div"); 
// // console.dir(div);
// // let heading=document.querySelector("h1");
// // let h2=document.querySelector("h2");
// // console.dir(h2.innerText);
// // h2.innerText=h2.innerText + " Apna College For Students ";
// // console.dir(h2.innerText);
// // 
// // let div = document.querySelector("div");
// // console.dir(div);
// // let id=div.getAttribute("id");
// // let name=div.getAttribute("name");

// //  console.dir(name);
// // let para = document.querySelector("p");
// // console.dir(para.setAttribute("class","newclass"));

// // let newbutton = document.createElement("button");
// // console.dir(newbutton);
// // newbutton.innerText="click me!";
// // newbutton.style.color = "white";
// // newbutton.style.backgroundColor = "red";
// // document.querySelector("body").prepend(newbutton);
// // let div = document.querySelector("div");
// // console.dir(div);
// // div.append(newbutton);//last me add(inside)
// // div.prepend(newbutton);//starting me add(inside)
// // div.after(newbutton);//last me add(outside)
// // div.before(newbutton);//starting me add(outside)
// // let newheading = document.createElement("h1");
// // newheading.innerHTML = "<i>This Is My First Heading.</i>";
// // document.querySelector("body").prepend(newheading);
// // let para = document.querySelector("p");
// // para.remove();
// // let head = document.querySelector("h2");//used for remove heading(h2)
// // head.remove();
// // let nwclass=document.querySelector("p");
// // console.dir(nwclass.getAttribute("class"));
// // console.dir(nwclass.setAttribute("class","newclass"));
// // console.dir(para.classList.add("newclass"));
// // let btn1 = document.querySelector("#btn1")
// // btn1.onclick = () =>{
// //     console.log("this is me");
// //     let a=12;
// //     console.log(a);
// // };
// //  btn1();
// // btn1.onclick = (e) =>{
// //     console.log(e);
// // }

// // Q-1:-Create a toggle button that changes the screen to dark mode when clicked & light-mode when
// //  clicked again. 
// // let btnmode = document.querySelector("#btn1");
// // let body = document.querySelector("body");
// // let currmode = "light";
// // btnmode.addEventListener("click",() =>{
// //     if(currmode === "light"){
// // currmode="dark";
// // body.classList.add("dark");
// // body.classList.remove("light");
// //     }
// //     else{
// //         currmode="light";
// //         body.classList.add("light");
// //         body.classList.remove("dark");
// //         }
// //         console.log(currmode);
// // });


// // Prototype in js
// // const employee = {
// //     caltax(){
// //         console.log("tax rate is 10%");
// //     }
// // }
// // const karan={
// //     salary:290000,
// // };
// karan.__proto__=employee;

// class Car{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }
// let fortuner = new Car();

//Inheritance
// --------------
// 

// class person{
//     eat(){
//         console.log("eating");
//     }
//     sleep(){
//         console.log("sleeping");
//     }
// }
// class engineer extends person{
// work(){
//     console.log("solve the problems");
// }
// }
// let megha = new engineer();
// megha.sleep();

// let data = "individual data";
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewdata(){
// console.log("data=",data);
//     }
// }
// let student1 = new User("megha","smbhv@gmail.com");
// let student2 = new User("aashu","aashu@gmail.com");
// student1.viewdata();

//error handling

// let a=20;
// let b=40;
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// try{
// console.log("a+b=",a+c);
// }catch(err){
//     console.log(err);
// }

// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);

//ASYNCHRONOUS PROGRAMMING:-
// function hello(){
//     console.log("hello megha!");
// }
// setTimeout(hello,3000); //timeout
// let c= 20;
// let d=30;
// console.log("c+d=",c+d);
// console.log("c+d=",c+d);
// console.log("c+d=",c+d);

// //Promises:-
// //---------------
// // let promise = new Promise((resolve,reject) => {
// // console.log("I am a promise");
// // });

// const getPromise = ()=>{
//    return  new Promise((resolve,reject)=>{
// console.log("I am a promise");
// resolve("sucess");
//     })
// }
// let promise = getPromise();
// promise.then(()=>{
// console.log("promise is fulfilled");
// })

// //async-await:-
//----------------
// async function ab(){
//     console.log("hm");
// }
// ab();

//API fetch:-
// ----------
const URL ="https://catfact.ninja/fact";

const getFacts =async ()=>{
    console.log("getting data....");
let response=await fetch(URL);
console.log(response);
let data = await response.json();
console.log(data);
}
getFacts();


