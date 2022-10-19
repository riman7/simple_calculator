function calculate(){
    document.getElementById("display").value = eval(document.getElementById("display").value);
}
let del = () => {
    document.getElementById("display").value = document.getElementById(display.id).value.slice(0,-1);
}