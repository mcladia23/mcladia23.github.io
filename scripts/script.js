document.addEventListener('DOMContentLoaded', function () {
    slideshowInterval = setInterval(nextSlide, 2000);
});

if (modoOscuroActivo) {
    document.querySelector('header').classList.add('dark-mode');
    document.querySelector('nav').classList.add('dark-mode');
}

function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    var darkModeEnabled = document.body.classList.contains('dark-mode');
    setCookie('darkMode', darkModeEnabled, 30);
}

document.addEventListener('DOMContentLoaded', function () {
    var darkModeEnabled = getCookie('darkMode') == 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
    }
    slideshowInterval = setInterval(nextSlide, 2000);
});
