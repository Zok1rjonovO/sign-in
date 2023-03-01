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

  $elBox.innerHTML += `
    <li style="width: 300px;">
        <p>User First Name: ${name}</p>
        <p>User Second Name: ${secondName}</p>
        <p>User Email: ${Email}</p>
        <p>User Password: ${Password}</p>
    </li>
    `;

    $elUserName.value = null;
    $elUserSecondName.value = null;
    $elUserEmail.value = null;
    $elUserPassword.value = null;
    $elUserConfPass.value = null;
});
