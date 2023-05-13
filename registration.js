let name = document.getElementById("import").value;
let buttonA = document.querySelector("#submitid");
let paragraph = document.querySelector("#para");
buttonA.onclick = () => {
paragraph.innerHTML=`Your name ${document.getElementById("import").value} is registered`;
};