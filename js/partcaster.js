function favGuitar(message) {
    prompt("What's your favorite guitar?", "My favorite guitar is... " + message);
 }
 function lilHistory(message) {
    prompt("Some history", "Read " + message);
 }
 function loadFunc() {
    alert("The page has loaded." + new Date());
 }
 function sniffer(message) {
    console.log("something happened! " + message);
 } 


 document.getElementById("butt").onclick=function(){
    sniffer('button clicked');
 }
 document.getElementById('secondP').onmouseover=function(){
    alert('innerP');
    console.log("Log the anonimouse inner function on secondP") ;
 }