function dom1(){
    let papus = document.getElementById("dom11e");
    // Izveidojam sagatavi
    let berns = document.createElement("p");
    berns.setAttribute("class","kk1");
    //Ielieka saturu
    let jaunsSaturs = document.createTextNode("Šī ir jauna rindkopa");
    //Ieliekam jauno saturu izveidotajā sagatavē
    berns.appendChild(jaunsSaturs);
    //Sagatavoto objektu ievietojam ...
    papus.appendChild(berns);
}
function dom_dz(){
    let papus = document.getElementById("dom11e");
    //Dzēsisim visus bērnus
    while(papus.firstChild){
        let pirmais = papus.firstChild;
        papus.removeChild(pirmais);
    }
}