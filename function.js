function goRegister() {
    window.location.href = "register.html";
}

function goBack() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const password = document.getElementById("password");
    const showPass = document.getElementById("showPass");

    showPass.addEventListener("change", () => {
        if (showPass.checked){
            password.type = "text";
        } else {
            password.type = "password";
        }
    });
});
