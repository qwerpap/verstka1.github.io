document.getElementById('burger-menu').addEventListener('click', function () {
    menu = document.getElementById('full-screen-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const declineCookiesButton = document.getElementById('decline-cookies');

    // Проверяем, было ли уже принято согласие
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'flex'; // Показываем всплывающее окно
    }

    // Обработчик события для кнопки "Принять"
    acceptCookiesButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true'); // Сохраняем согласие в localStorage
        cookieConsent.style.display = 'none'; // Скрываем всплывающее окно
    });
    declineCookiesButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieConsent.style.display = 'none'; //
    });
});