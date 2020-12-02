//JavaScript sourcecode
//Copyright 2020 LazerCorp
//dark theme
const d = "#29465b"
function dark(){
    document.getElementById("body").style.backgroundColor=d;
    document.getElementById("light").style.display="block";
    document.getElementById("dark").style.display="none";
    document.getElementById("support-dark").style.display="block";
    document.getElementById("support-light").style.display="none";
    document.getElementById("new").style.color="white";
    document.getElementById("Sites").style.color="white";
}
//light theme
function light(){
    document.getElementById("body").style.backgroundColor="white";
    document.getElementById("dark").style.display="block";
    document.getElementById("light").style.display="none";
    document.getElementById("support-light").style.display="block";
    document.getElementById("support-dark").style.display="none";
    document.getElementById("new").style.color="black";
    document.getElementById("Sites").style.color="black";
}
//prompt for asking username
var user=prompt("enter name","user")
//time function
var h = new Date().getHours(); 
if(h < 12){
document.write("<p style='color:#29465b;'>Good Morning "+user+"!</p>")
document.write("<p style='color:white;'>Good Morning "+user+"!</p>")
} else if (h < 18) {
document.write("<p style='color:#29465b;'>Good Afternoon "+user+"!</p>")
document.write("<p style='color:white;'>Good Afternoon "+user+"!</p>")
}else{
document.write("<p style='color:#29465b;'>Good Evening "+user+"!</p>")
document.write("<p style='color:white;'>Good Evening "+user+"!</p>")
}
//searcher
var query=prompt("welcome to lazer-engine "+user+" enter search query","search query")
document.write('<hr><a href="https://www.google.com/search?q='+query+'">Google search</a><br><hr>')
document.write('<a href="https://www.bing.com/search?q='+query+'">Bing search</a><br><hr>')
document.write('<a href="https://www.search.yahoo.com/search?q='+query+'">Yahoo! search</a><br><hr>')