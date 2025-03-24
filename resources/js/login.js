document.addEventListener("DOMContentLoaded", function () {
    const authBtn = document.getElementById("authBtn");
 
    authBtn.addEventListener("click", function () {
        alert("Redirecting to third-party authentication...");
 
        // Simulate redirect (Replace with actual authentication URL)
        setTimeout(() => {
window.location.href = "https://thirdparty-2fa.com/login"; // Change this to your actual 2FA provider URL
        }, 1000);
    });
});