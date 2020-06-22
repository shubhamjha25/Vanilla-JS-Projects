let i,j,k,color;

function flipColor(){
    i = Math.round(Math.random()*256);
    j = Math.round(Math.random()*256);
    k = Math.round(Math.random()*256);
    color="rgb("+i + ", "+j+ ", "+k+")";
    document.getElementById('bd').style.backgroundColor=color;
    document.getElementById('clr-cd').innerHTML=color;
}