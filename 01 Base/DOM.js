/* const items = document.querySelectorAll("#list li");

const modalContent = `${items[0].textContent}, ${items[items.length - 1].textContent}, ${items[1].textContent}, ${items[3].textContent}, ${items[2].textContent}`;

alert(modalContent); */
/* 
const header = document.querySelector("h1");
header.style.background = "green";


const mySecond = document.getElementById("mySecond");
mySecond.style.color = "red";


const myThird = document.getElementById("myThird");
myThird.style.textDecoration = "underline";


const myList = document.getElementById("myList");
myList.style.display = "flex";
myList.style.listStyleType = "none";


const span = document.querySelector("span");
span.style.visibility = "hidden";
 */

/* 
const bodyElement = document.createElement("body");
const mainElement = document.createElement("main");
const divElement = document.createElement("div");
const pElement = document.createElement("p");


mainElement.setAttribute("class", "mainClass check item");
divElement.setAttribute("id", "myDiv");


pElement.textContent = "First paragraph";


divElement.appendChild(pElement);
mainElement.appendChild(divElement);
bodyElement.appendChild(mainElement);


document.documentElement.appendChild(bodyElement);
 */



/* const obj = {
  
}
const outBlock = document.querySelector(".out");
const textInput = document.querySelector(".text-data");
const phoneInput = document.querySelector("input[type=phone]");
const dateInput = document.querySelector("input[type=date]");
const emailInput = document.querySelector("input[type=email]");
const btn = document.querySelector("input[type=submit]");

btn.addEventListener("click", () => {
  obj.name = textInput.value;
  obj.phone = phoneInput.value;
  obj.birthday = dateInput.value;
  obj.email = emailInput.value;
  outBlock.innerHTML = JSON.stringify(obj, null, 2);
}) */


/* const circle = document.querySelectorAll(".circle");

for (let i = 0; i < circle.length; i++) {
  let dataAnim = circle[i].getAttribute('data-anim');
  circle[i].classList.add(dataAnim);
  
} */


/* const price = document.querySelector('#outprice');
const gradientsColor = document.querySelectorAll('.color');

gradientsColor.forEach((color) => {
color.addEventListener('click', () => {
const priceValue = color.getAttribute('data-price')
price.innerText = priceValue
});
}); 

 */