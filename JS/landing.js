document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.getElementById('welcomeScreen').style.transform = 'scale(0)';
        window.location.href = 'home.html'; // specify the main content page
    }, 6000);
});
