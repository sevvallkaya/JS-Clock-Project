

let name = prompt("Adınız nedir?");



let myName =document.querySelector("#myName");
    document.getElementById("myName").innerText = name;
let myClock =document.querySelector("#myClock");
let myTimePast =document.querySelector("#myTimePast");

function tarihSaat() {
var date = new Date().toLocaleString('tr-TR');
    
    document.getElementById("datetime").innerHTML = date;
        }
        // her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
    setInterval(tarihSaat, 1000); 