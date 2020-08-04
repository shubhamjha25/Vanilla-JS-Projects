function generatePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
    var len = 14; // Length of the Password (Can be changed later)
    var output = "";

    for(var i=0; i<len; i++) {
        var ran = Math.floor(Math.random() * chars.length);
        output += chars.substring(ran, ran+1);
    }

    document.getElementById("inp").value = output;
}

