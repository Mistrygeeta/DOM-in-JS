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

// const h1 = document.querySelectorAll("h1");
// h1.forEach(ele => {
//     ele.style.color="green";
// });

//19.	Change the display property of an element with the class hidden to block.
const element = document.querySelector(".element");
element.classList.remove("hidden");

//20.	Write a function that toggles the visibility of an element (hide/show) when called.
function togglevisibility(){
 const elem = document.querySelector(".elem");
 elem.classList.toggle("hidden");
}
togglevisibility();

//Adding/Removing Event Listeners
//21.	Add a click event listener to a button with the ID login that logs "Button clicked!" to the console.
// const button = document.querySelector("#login");
// button.addEventListener("click",()=>{
//  console.log("button clicked!")
// })

//22.	Write a function to remove a mouseover event listener from an element with the class hoverable.

//23.	Add a submit event listener to a form with the ID signup that prevents the default form submission.

//24.	Attach a keydown event listener to the document and log the key pressed to the console.
//   document.addEventListener("keydown" ,(event)=>{
//     console.log(`key pressed: ${event.key}`)
//   })

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


//28.	Remove the class hidden from a <div> with the ID popup.
// const div = document.querySelector(".hidden");
// div.removeAttribute("class");
// div.setAttribute("id","popup");

//10, 12, 15,23,25,41,46,47,48,49,50
//29.	Add a class selected to all <li> elements inside a <ul> with the class list.

// const list = document.querySelectorAll("li");
// list.forEach(ele => {
//     ele.classList.add("selected");
    
// });

//30.	Write a function that removes the class disabled from a button with the ID submit.
function removeclass(){
    const buttons = document.querySelector("#submit");
    buttons.removeAttribute("class");
}
 removeclass();

 //Adding/Removing IDs to HTML Elements
//31.	Write code to add the ID featured to a <div> with the class hero.
const hero = document.querySelector(".hero");
hero.id = "featured";

//32.	Remove the ID old-id from an element and add a new ID new-id to it.
const ele = document.querySelector("#old-id");

ele.id = "new-id";

//33.	Write a function that sets a unique ID to each <li> in an ordered list.
function setuniqueId (){
    const list = document.querySelectorAll("#orderedlist li");
    list.forEach((li, index) => {
        li.id = 'item-'+ (index + 1);
        
    });
}
setuniqueId();

//34.	Add an ID header-main to the first <h1> element on the page.
const h1 = document.querySelector("h1");
h1.id = "header-main";

//35.	Remove the ID from an element with the class removable.

const classes = document.querySelector(".removable");
classes.removeAttribute("id");

//Adding/Removing Attributes to HTML Elements
//36.	Add a src attribute with the value "image.jpg" to an <img> element with the ID thumbnail.
const img = document.querySelector("#thumbnail");
img.src =src="image.png";

//37.	Remove the disabled attribute from a button with the class enable-button.

const btns = document.querySelector(".enable-button");
btns.removeAttribute("disabled");

//38.	Write a function to set a data-user-id attribute with the value "12345" to a <div> with the class profile.
const file = document.querySelector(".profile");
file.setAttribute("data-user-id","12345");

//39.	Select a <a> tag and add a target="_blank" attribute to open the link in a new tab.
const add = document.querySelector("a");
add.setAttribute("target","_blank");

//40.	Remove the required attribute from all <input> elements inside a form with the ID registration.
 const input = Array.from(document.querySelectorAll("#registration input"));
 input.forEach(element => {
    element.removeAttribute("required");      
 });

//Combining Multiple Topics
//41. 	Write a function to add an event listener to all buttons, and when clicked, toggle the class active on them.

//42.	Create a function to select a <div> by ID, add a class selected, change its text to "Hello", and set its background color to yellow.
function ab(){
    const div = document.querySelector("#select");
    div.classList.add("selected");
    div.textContent ="Hello Everyone";
    div.style.backgroundColor= "yellow";
}
ab();

//43.	Add a click event listener to all <li> elements inside a <ul> that logs the text content of the clicked item.
const li = document.querySelectorAll("li");
li.forEach(element => {
    element.addEventListener("click",(event)=>{
        console.log(event.target.textContent);
     })
});

//44.	Write a function to add a new <p> element inside a <div> with the ID content and set its text to "  Paragraph".
function addelement(){
    const div = document.querySelector("#content");
    div.innerHTML = "<p>paragraph</p>"
}
addelement();

// function addelement() {
//     const div = document.querySelector("#content");
//     const newParagraph = document.createElement("p");
//     newParagraph.textContent = "Paragraph";
//     div.appendChild(newParagraph);
// }

// addelement();

//45.	Add a mouseover event listener to an <img> that changes its src attribute to "hover.jpg".
const image = document.querySelector(".img");
image.addEventListener("mouseover", ()=>{
    image.src = "hover.jpg";
});

image.addEventListener("mouseout",()=>{
    image.src = "tiranga.webp";
})

//Real-Life Scenarios
