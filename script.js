localStorage.setItem('num',0);


function pls(id){
    let counter = document.getElementById(id).innerHTML;
    let stevilka = document.getElementById(id);
    x = Number(counter);
    x++;
    stevilka.innerHTML = x;
    return localStorage.setItem('num',x);
}

function igh(id){
    let counter = document.getElementById(id).innerHTML;
    let stevilka = document.getElementById(id);
    x = Number(counter);
    x--;
    stevilka.innerHTML = x;
    return localStorage.setItem('num',0);
}