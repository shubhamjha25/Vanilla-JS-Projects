function togglePassword() {
    var inputField = document.getElementById("inp");
    if (inputField.type === "password") {
        inputField.type = "text";
    } else {
        inputField.type = "password";
    }
}