alert("Hello");

console.log("hello");
console.log(window);

window.console.log("hello2"); //console.log is a part of window object. JS knows window is a global object

//even alert and prompt is actually a part of the window object
window.alert("hi");

console.log(window.document); //show entire html file
console.dir(window.document); //shows all properties of document object(which is a part of window object)

//console.log() to just print on screen/just prints object as an element
//              it treats DOM elements specially like p,h1 can be printed directly via this(any html element)
//console.dir() to print properties and methods of special objects like document object

//HTML file gets converted to Document object(DOM) in form of a tree
//Every node in the tree is an object


//Access html file inside JS file
console.dir(window.document); 
//or
console.dir(document); //since window is global

console.dir(document.body);//to view body tag of html file  //view childNodes proeprty under this and see child nodes of body

//log to view the object(html code) and dir to view object's properties and methods

console.dir(document.head);
console.log(document.body.childNodes[1]); //to accesss <h1> tag
document.body.style.background = "green"; //Dynamically change content on HTML or SS file using JS. Thats why DOM is used to touch HTML,CSS files at runtime since they both are stored on a webserver and cannot be changed there again and again
document.body.childNodes[3].style.background = "pink"; //to accesss <h3> tag
document.body.childNodes[3].innerText = "Dynamically H1 changed";

//Therefore to change content(HTML file) and style(Css file) on our website via user interaction and we dont want to
//change our HTML CSS files we do DOM manipulation


//DOM Manipulation - Select html elements by id,class or tagname.
let heading = document.getElementById("heading"); //it is a method of document object, returns a value
console.dir(heading);  //prints(h1#heading on console, h1 is tag name and heading is its id)

let heading2 = document.getElementsByClassName("heading2"); //returns an HTMLCollection(NoOfObjectsInClasss) very similar to array, it has indexing, length property and many methods as well, push pop not there, it is a differetn data structure from an array
console.dir(heading2);

let heading3 = document.getElementById("heading3");  //null value returned if element with id does not exist
console.dir(heading3); 

let heading4 = document.getElementsByClassName("heading4"); //empty collection returned if elements with class do not exist
console.dir(heading4);


let para2 = document.getElementsByTagName("p"); //returns HTMLCollection with 2 items
console.dir(para2);

//Ultimate DOM Manipulation method - Query Selector - document.querySelector("id/class/tag") - returns first element
//document.querySelectorAll("id/class/tag") - returns a node list

//Eg)All paragraphs
let a = document.querySelectorAll("p"); //tag
let b = document.querySelectorAll(".heading2"); //class
let c = document.querySelectorAll("#heading"); //id


console.dir(a);
console.dir(b);
console.dir(c);


//Now we can acces any element, there are some properties using which we can check values of some elements and even change their values
//Using these properties we can get and set the values of these properties
//1)tagName - returns tag name of any element node
let button1 = document.querySelector("#button");
console.log(button1);
console.log(button1.tagName);

let para = document.querySelector("p");
console.log(para);
console.log(para.tagName);

//2)innerText - returns text content of element and all its children

console.dir(document.body.firstChild); //returns #text??
console.dir(document.querySelector("div").children);
console.log()