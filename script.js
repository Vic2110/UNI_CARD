document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Por favor, completa todos los campos.");
        } else {
            alert("Inicio de sesión exitoso (simulado)");
            window.location.href = "index_menu_principal.html"; // Redirige al menú principal
        }
    });
});

