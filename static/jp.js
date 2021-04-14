function du1(){
    let we = document.getElementById("eee"); 
    let se = we.textContent;
    se = se + "1";
    we.textContent = se;

}

var n=0;
function tt_11e(){
    let rez = document.getElementById("t_11e"); 
    n = n + 1;   
    rez.textContent = "Šis ir " +String(n)+". klikšķis";
}
//t11 = window.setInterval(tt_11e,1000);



function cip(a){
    let rez = document.getElementById("re");
    let poga1 = document.getElementById("po11e");
    poga1.setAttribute("class","t1");
    let saturs = rez.textContent;
    saturs = saturs + String(a);
    let x = parseFloat(saturs);
    rez.textContent = String(x);
    console.log(a);
    console.log(saturs);
    
    setTimeout(bubu,2000);
}
function bubu(){
    let poga1 = document.getElementById("po11e");
    poga1.setAttribute("class","t0");    
}


function kva(){
    let rez = document.getElementById("re");
    let saturs = rez.textContent; 
    let x = parseFloat(saturs);
    rez.textContent = String(x*x);
    console.log(x*x);
}
var op1="";
function sas(){
    let rez = document.getElementById("re");
    op1= rez.textContent;
    rez.textContent = "0";
}

function vie(){
    let rez = document.getElementById("re");
    let op2 = rez.textContent;
    let su1 =0;
    su1 = parseFloat(op1) + parseFloat(op2);
    rez.textContent = String(su1);
}





function j11e_1(){
    let o11e_1 = document.getElementsByTagName("div");
    console.log(o11e_1);
    let i;
    let n = o11e_1.length;
    console.log(n);
    let a = parseFloat(o11e_1[0].textContent);
    let b = parseFloat(o11e_1[1].textContent);
    console.log(a);
    a = a + b;
    o11e_1[2].innerHTML = a.toString();
}











let a;
var b;
function jp1(a,b){
    let d;
    console.log("TAs ir kontrolei");
    console.log(b);
    if(b==0){
        // operatori TRUE
        console.log("Ar nulli dalīt nedrīkst");
    }
    else{
        // FALSE
        console.log(a/b);
        c = Math.sqrt(a/b);
        console.log("Kvadrātsakne:");
        console.log(c);
    }
}