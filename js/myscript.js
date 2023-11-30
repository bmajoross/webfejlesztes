document.getElementById("mybutton").addEventListener("click",ertekel)

function ertekel(){
    let pontszam = 0;
    if (document.getElementById("elso").checked==1) {
        pontszam++;}
    if (document.getElementById("masodik").checked==1) {
        pontszam++;} 
    if (document.getElementById("harmadik").selected==1) {
        pontszam++;} 

    let szl = document.getElementById("szuper").checked;
    let st = document.getElementById("sille").checked;
    let mt = document.getElementById("marton").checked;
    let mg = document.getElementById("majoross").checked;

    if (szl==0 && st==0 && mt==1 && mg==0) {
        pontszam++;}
    if (pontszam == 4){
        alert("Gratulálunk! Ön 4/4 pontot szerzett!")
    }
}
