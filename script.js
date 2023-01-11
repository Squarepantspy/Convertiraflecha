/* Cambiar a funciones fat arrow ES6 */
document.getElementById("button").onclick = ()=> setBackgroundColorById("paragraph", "blue");

document.getElementById("alert").onclick = ()=> alert(document.getElementById("popup-input").value);

document.getElementById("hover-this").onmouseover = () => setBackgroundColorById("body", "red");

document.getElementById("hover-this").onmouseout =()=> setBackgroundColorById("body", "white");


//obtener valor por id
let getValueFromId = id => document.getElementById(id).value;

//arrow funct who set background color by id
let setBackgroundColorById = (id,color)=> document.getElementById(id).style = "background-color: " + color;

//mouseover arrow funct
let mouseOverFunction= (elem)=> elem.style = "background-color: black";

//changebackgroundcolorbyinput funcionalidad 
let changelastcolor = (elemento)=> elemento.style = "background-color: "+ document.getElementById("backinput").value;
