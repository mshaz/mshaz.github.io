function transformUpperCase(){
let a = document.getElementById("namaPengguna");
a.value  a.value.toUpperCase();

}

let elUsername = document.getElementById("namePengguna");
elUsername.addEventListener("keyup", transformUpperCase);