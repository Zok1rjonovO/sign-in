let $elForm = document.getElementById("forms");
let $elBox = document.getElementById("box");

let $elUserName = document.getElementById("userName");
let $elUserSecondName = document.getElementById("userSecondName");
let $elUserEmail = document.getElementById("UserEmail");
let $elUserPassword = document.getElementById("UserPassword");
let $elUserConfPass = document.getElementById("UserConfPass");

$elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  
  let name = $elUserName.value.trim();
  let secondName = $elUserSecondName.value.trim();
  let Email = $elUserEmail.value.trim();
  let Password = $elUserPassword.value.trim();
  let ConfPassword = $elUserConfPass.value.trim();
  
  console.log( $elUserName.value );
  console.log( $elUserSecondName.value );
  console.log( $elUserEmail.value );
  console.log( $elUserPassword.value );
  
  if (Password !== ConfPassword) {
    alert("your password isn't same!");
    $elUserPassword.value = null;
    $elUserConfPass.value = null;
  }
  
  
  $elUserName.value = null;
  $elUserSecondName.value = null;
  $elUserEmail.value = null;
  $elUserPassword.value = null;
  $elUserConfPass.value = null;
});

let form = document.querySelector("#form") 
let elScetion = document.querySelector("section")
let elSpan = document.querySelector(".span")
let elContent = document.querySelector(".content h1")
let elbtn = document.querySelector("button[type=submit]")
let allElements = document.querySelectorAll("*");


form.addEventListener("change" , evt => {
  console.log(evt.target.value);
  console.log(evt.target.name);
  
  if(evt.target.name == "bgColor"){
    elContent.style.color = evt.target.value
    elbtn.style.background = evt.target.value
  }

  allElements.forEach((evt) => {
    elSpan.classList.add("orange");
    elSpan.classList.remove("span");
    elScetion.classList.add("orange__background");
    elScetion.classList.remove("section");
  });
})