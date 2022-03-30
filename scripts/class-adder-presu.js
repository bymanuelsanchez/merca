const titleList = document.querySelectorAll('.presu-title');
titleList.forEach(function(title) {
    title.addEventListener('click', function() {
        const id = title.id;
        document.querySelector('#hide-' + id).classList.add('presu-item-show');
    })
})