const username = document.querySelector("#username");
const password = document.querySelector("#password");

function verSenha() {
    if(username.value.length == 0 || password.value.length == 0){
        alert("preencha os dados >:(")
    } else {
        window.open("https://google.com")
    }

}