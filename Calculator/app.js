function operation(i){
    document.querySelector("textarea").value += i;
}

function eraseAll(){
    document.querySelector("textarea").value = "";
}

function erase(){
    let inp = document.querySelector("textarea").value;
    document.querySelector("textarea").value = inp.substring(0, inp.length-1);
}

function ans(){
    let inp = document.querySelector("textarea").value;
    document.querySelector("textarea").value = eval(inp);
}