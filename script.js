document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generateBtn");
    const copyBtn = document.getElementById("copyBtn");

    generateBtn.addEventListener("click", generatePassword);
    copyBtn.addEventListener("click", copyPassword);

    function generatePassword() {
        const length = document.getElementById("length").value;
        const includeUppercase = document.getElementById("includeUppercase").checked;
        const includeLowercase = document.getElementById("includeLowercase").checked;
        const includeNumbers = document.getElementById("includeNumbers").checked;
        const includeSymbols = document.getElementById("includeSymbols").checked;

        let chars = "";
        if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) chars += "0123456789";
        if (includeSymbols) chars += "!@#$%^&*()_-+=<>?";

        let password = "";
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        document.getElementById("password").value = password;
    }

    function copyPassword() {
        const passwordInput = document.getElementById("password");
        passwordInput.select();
        passwordInput.setSelectionRange(0, 99999); /* For mobile devices */
        document.execCommand("copy");
        alert("Senha copiada para a área de transferência!");
    }
});
