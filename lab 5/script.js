var ceva=null;
var animateR;

function action(){
    ceva = document.querySelector("#divy");
    ceva.style.position = 'relative';
    ceva.style.left = '0';
    ceva.style.top = '0';
}

window.onload = action;

function left(){
    ceva = document.querySelector("#divy");
    if (parseInt(ceva.style.left) > 0){
        ceva.style.left = parseInt(ceva.style.left) - 10 + 'px';
    } 
    animate = setTimeout(left, 100);
}

function up(){
    ceva = document.querySelector("#divy");
    if (parseInt(ceva.style.top) > 0){
        ceva.style.top = parseInt(ceva.style.top) - 10 + 'px';
    }
    animate = setTimeout(up, 100);
}

function down(){
    ceva = document.querySelector("#divy");
    if (parseInt(ceva.style.top) < 325){
        ceva.style.top = parseInt(ceva.style.top) + 10 + 'px';
    }
    animate = setTimeout(down, 100);
}

function right(){
    ceva = document.querySelector("#divy");
    if (parseInt(ceva.style.left) < 620){
        ceva.style.left = parseInt(ceva.style.left) + 10 + 'px';
    }
    animate = setTimeout(right, 100);
}

function stop (){
    clearTimeout(animate);
}

