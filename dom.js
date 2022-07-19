// DOM--> Document object model
//when Html is put under HTML parser it produce a DOM tree
// js engine manipulate both dom tree and cssom
console.log("Hi from DOM")
// document is global variable to access to DOM
// console.log(document)
// Read the DOm and print on screen
console.log(document.getElementsByTagName("h1"))
const heading=document.getElementsByTagName("h1");
// methods available for array are not present
// HTML Collection
console.log(heading[0].innerText)
console.log(heading[1].innerText)


const coolElements=document.getElementsByClassName("cool");
console.log(coolElements[0].innerText)
console.log(coolElements[1].innerText)

console.log(document.getElementById("fun").innerText)

// if we have two element with same id and try to print on console only first element with id will be printed


// this one can do work of all three
const headingsQuery=document.querySelectorAll("h1")
console.log(headingsQuery[0])
console.log(headingsQuery[0].innerText)
console.log(headingsQuery[1].innerText)

const coolElementsQuery=document.querySelectorAll(".cool")
console.log(coolElementsQuery)
console.log(coolElementsQuery[0].innerText)
console.log(coolElementsQuery[1].innerText)
// querySelectorAll(for multiple,like element with same class) will give an array 

// to select only one we use querySelector(for single like element with id) only
console.log(document.querySelector("#fun").innerText)

console.log(document.querySelector("h1:nth-child(2)").innerText)

// querySelectorAll and querySelector can do all thing of getElement...() but in old website they have used getElement...() so if we start using only  querySelectorAll and querySelector the old websites will not work,these all are old feature and querySelectorAll is new but we cannot remove those because it will break the web
// before react jquery was used

// with querySelectorAll we can use .forEach 
// but with getElement..( ) .forEach  cannot be used

document.querySelectorAll("h2").forEach((elm)=>console.log(elm.innerText))


// how to change content using js
document.querySelector(".todo").innerText="it is replaced"
// change content of all h3 content
// const repQuote=document.querySelectorAll(".todo")
// console.log(repQuote)
// repQuote.forEach((rep)=>rep.innerText="it is replaced")

// to change only even or odd number
const repQuote=document.querySelectorAll(".todo:nth-child(odd")
console.log(repQuote)
repQuote.forEach((rep)=>rep.innerText="it is replaced")


// create an element from js

const beuty=document.createElement("h2");
beuty.innerText="Dont let small minds convince you that your dreams are too big"

// element.append(child)
// document.body.appendChild(beuty);

// if want to add after specific element(<div class="container"><div/>
document.querySelector(".container").append(beuty)





const favs=["Badminton","chess","Movies","Cricket","Travelling"];

const favList=document.createElement("ul");
document.body.append(favList)

for(let value of favs){
    // console.log(value)
    const favItem=document.createElement("li");
    favItem.innerText=value;
    favList.append(favItem);
}
console.log(favList)



const userInput=document.querySelector(".username");
// console.log(userInput,userInput.setAttribute)
userInput.setAttribute("placeholder","Enter your username")
userInput.setAttribute("type","number")


const srcs=["/DSC_0744.JPG","/DSC_0745.JPG","/DSC_0746.JPG","/DSC_0748.JPG"]

for(let val of srcs){
    // console.log(val)
    const image=document.createElement("img");
    image.src=val;
    // console.log(image.src)
    document.body.append(image)
    image.setAttribute("class","landcapePic")
}
