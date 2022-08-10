


function pls(id){
    let counter = document.getElementById(id).innerHTML;
    let stevilka = document.getElementById(id);
    x = Number(counter);
    x++;
    stevilka.innerHTML = x;
    localStorage.setItem('num',x);
    return;
}

function igh(id){
    let counter = document.getElementById(id).innerHTML;
    let stevilka = document.getElementById(id);
    x = Number(counter);
    x--;
    stevilka.innerHTML = x;
    localStorage.setItem('num',x);
    return; 
}