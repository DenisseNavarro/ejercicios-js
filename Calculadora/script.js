const display = document.querySelector("#display");
//document.querySelector porque solo hay una parte donde se visualiza la calculadora
const buttons = document.querySelectorAll("button");
//document.querySelectorAll porque entran todos los botones de la calculadora
//con el forEach recorremos todos los botones,hacemos un mapeo de todos.
buttons.forEach((item) => {item.onclick=()=>{if(item.id=="clear"){display.innerText="";}else if(item.id=="backspace")
    {let string= display.innerText.toString();display.innerText=string.substr(0,string.length-1)}}});