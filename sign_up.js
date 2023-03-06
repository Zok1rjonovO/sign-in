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
  
  // $elBox.innerHTML += `
  // <li style="width: 300px;">
  // <p>User First Name: ${name}</p>
  // <p>User Second Name: ${secondName}</p>
  // <p>User Email: ${Email}</p>
  // <p>User Password: ${Password}</p>
  // </li>
  // `;
  
  $elUserName.value = null;
  $elUserSecondName.value = null;
  $elUserEmail.value = null;
  $elUserPassword.value = null;
  $elUserConfPass.value = null;
});

let form = document.querySelector("#form") 
let elBody = document.querySelector("body") 
let elScetion = document.querySelector("section")
let elScetionh = document.querySelector("section span:hover")
let elScetionb = document.querySelector("section::before")
let elContent = document.querySelector(".content h1")
let elbtn = document.querySelector("button[type=submit]")



form.addEventListener("change" , evt => {
  console.log(evt.target.value);
  console.log(evt.target.name);
  
  if(evt.target.name == "bgColor"){
    elScetion.style.background = evt.target.value
    elContent.style.color = evt.target.value
    elbtn.style.background = evt.target.value
    elScetionh.style.background = evt.target.value

  }
})