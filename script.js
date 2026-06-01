function downloadGame(event) {
    if (event.currentTarget.getAttribute('href') === '#' || event.currentTarget.getAttribute('href') === '') {
        event.preventDefault();
    }

    const popup = document.getElementById('popup');
    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}