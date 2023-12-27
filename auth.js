// auth.js
document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah pengiriman form

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Check if the provided username and password are correct
        if (username === "Dayati" && password === "student-nf23") {
            alert("Login berhasil");
            // Redirect to sukses.html
            window.location.href = "sukses.html";
        } else {
            alert("Login gagal. Periksa kembali username dan password.");
        }
    });
});
