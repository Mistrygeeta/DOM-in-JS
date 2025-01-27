// Selecting the Element

//1.	Write a function to select a <div> with the ID container and log it to the console.

// function abc(){
//     const div= document.querySelector("#container")
//     console.log(div);
// }
// abc();

//2.	Select all <li> elements inside a <ul> with the class menu and log them as an array.

// const liElements = document.querySelectorAll(".menu li");
// const arr = Array.from(liElements).map(li=> li.textContent);
// console.log(arr);

//3.	Write code to select the first <h1> element on a webpage and change its color to blue.
// const h1= document.querySelector("h1");
// h1.style.color = "blue";

//4.	Select the element with the class card and add a border to it using JavaScript.

// const card = document.querySelector(".card");
// card.style.border = "1px solid black"

//5.	Write a function to log all elements with the tag name button to the console.

// function logelement(){
//  const btn = document.getElementsByTagName("button");
//  console.log(btn)
// }
// logelement();

//Changing the Text in JS
//6.	Select a <p> element with the class description and change its text to "Updated description".

// const p = document.querySelector(".description");
// p.className = "updated description";

//7.	Write a function that takes an ID of an element and changes its text to "Hello, World!".
// function changetext(){
//   const h1 = document.querySelector("#text");
//   h1.textContent = "Hello, World!"
// }
// changetext();

//8.	Select a button with the ID submit and set its text to "Submit Form".

// const button = document.querySelector("#submit");
// button.textContent ="Submit Form";

//9.	Replace the text inside a <span> element with the class price to "₹499".

// const price = document.querySelector(".price");
// price.textContent = "₹499";

//10.	Write a function to change the text of all <h2> elements on the page to "Welcome to My Page".

// function replacetext(){
//   const h2 = document.querySelectorAll("h2");
//   h2.forEach(function(h2) {
//     h2.textContent ="Welcome to My Page";
//   });
  
// }
// replacetext();

//Changing the HTML in JS
//11.	Select a <div> with the ID content and replace its inner HTML with a new <h2> and <p> element.

// const div = document.querySelector("#content");
// const h2 = document.createElement("h2");
// const p = document.createElement("p");
// h2.innerHTML = "hey";
// p.innerHTML ="how are u?";

// div.innerHTML =' ';
// div.appendChild(h2);
// div.appendChild(p);
//12.	Write a function that takes an element ID and replaces its content with a <button>Click Me!</button>.

// function getid(){
//     const element =document.querySelector("#element");
//     element.innerHTML ="<button>Click Me!</button>"

// }
// getid()

//13.	Select an element with the class info and append a <strong> tag with the text "Important" inside it.

// const info = document.querySelector(".info");
// info.innerHTML = "<strong>important</strong>"

//14.	Replace the content of a <div> with ID main with an unordered list containing three <li> items.
// const main = document.querySelector("#main");
// main.innerHTML ="<ul><li>item1</li><li>item2</li><li>item3</li></ul>"

//15.	Create a function that takes an ID and adds an <img> tag with a placeholder image URL inside the element.

// function takeimg(id){
//     id.innerHTML = `<img src="https://plus.unsplash.com/premium_photo-1681841706521-5621aa9fe533?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">`
// }
// const elem = document.querySelector(".elem");
// takeimg(elem);

//Changing the CSS via JS
//16.	Select a <div> with the class box and change its background color to red.
const box = document.querySelector(".box");
box.style.backgroundColor = "red";

//17.	Write a function that takes an element ID and sets its font size to 20px.
// function abcd(id){
//     id.style.fontSize= "20px"
// }
// const h1 = document.querySelector("h1");
// abcd(h1);


//18.	Select all <h1> elements and change their text color to green.

const h1 = document.querySelectorAll("h1");
h1.forEach(ele => {
    ele.style.color="green";
});

//19.	Change the display property of an element with the class hidden to block.
const element = document.querySelector(".element");
element.classList.remove("hidden");

//20.	Write a function that toggles the visibility of an element (hide/show) when called.
function togglevisibility(){

}
togglevisibility();

//Adding/Removing Event Listeners
//21.	Add a click event listener to a button with the ID login that logs "Button clicked!" to the console.
const button = document.querySelector("#login");
button.addEventListener("click",()=>{
 console.log("button clicked!")
})

//22.	Write a function to remove a mouseover event listener from an element with the class hoverable.

//23.	Add a submit event listener to a form with the ID signup that prevents the default form submission.

//25.	Write a function that adds a click event listener to all buttons on the page and changes their background to yellow when clicked.
function addlistener(){
    const btn = document.querySelectorAll("button");
    btn.forEach(elem => {
        elem.addEventListener("click",()=>{
           elem.style.backgroundColor = "yellow";
        })
    });
   
}
addlistener();

//Adding/Removing Classes to HTML Elements
//26.	Add a class highlight to all <p> elements with the class paragraph.

const p = document.querySelectorAll(".paragraph");
p.forEach(element => {
    element.classList.add("Highlight")
});

//27.	Write a function to toggle the class active on an element when clicked.
