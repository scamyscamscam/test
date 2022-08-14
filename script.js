


function pls(id){
    let counter = document.getElementById('count').innerHTML;
    let stevilka = document.getElementById(id);
    x = Number(counter);
    x++;
    document.getElementById(id).innerHTML = x;
    localStorage.setItem('num',x);
    document.getElementById('progress').style.width = x + '%';
    document.getElementById('progress').innerHTML = x +'%';
    return;
}

function igh(id){
    let counter = document.getElementById(id).innerHTML;
    let stevilka = document.getElementById(id);
    x = Number(counter);
    x--;
    stevilka.innerHTML = x;
    localStorage.setItem('num',x);
    document.getElementById('progress').style.width = x + '%';
    document.getElementById('progress').innerHTML = x +'%';
    return; 
}
