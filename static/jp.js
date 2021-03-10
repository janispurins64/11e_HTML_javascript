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