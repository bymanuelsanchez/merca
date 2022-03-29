function obtainValues() {
    const title = document.querySelector('.presu-title');
    const info = document.querySelector('.presu-item-hide');
    const closer = document.querySelector('.closer');

    return {
        title, info, closer,
    }
}

title.addEventListener('click', function () {
    info.classList.add('presu-item-show');
    closer.classList.add('presu-item-show');
});

closer.addEventListener('click', function () {
    info.classList.add('presu-item-hide');
    closer.classList.add('presu-item-hide');
});