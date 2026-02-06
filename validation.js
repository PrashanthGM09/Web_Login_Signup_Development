
// Common validation logic for Login & Signup

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const email = loginEmail.value;
            const password = loginPassword.value;

            if (password.length < 6) {
                alert("Password must be at least 6 characters");
                return;
            }
            alert("Login successful (Demo)");
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = signupEmail.value;
            const password = signupPassword.value;

            if (password.length < 6) {
                alert("Password must be at least 6 characters");
                return;
            }
            alert("Signup successful (Demo)");
        });
    }
});
