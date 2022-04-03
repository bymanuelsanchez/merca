/*const banda1 = document.querySelector('.banda-1');

banda1.addEventListener('click', function () {
	banda1.classList.add('banda-1-active');
});*/

/*banda 1*/

var click1 = 1

const banda1 = document.querySelector('.banda-1');

banda1.addEventListener('click', function () {
	click1 = click1 + 1;
    if (click1%2==0) {
        banda1.classList.add('banda-1-active'); 
    } else {
        banda1.classList.remove('banda-1-active');
    };
});

/*banda 2*/

var click2 = 1

const banda2 = document.querySelector('.banda-2');

banda2.addEventListener('click', function () {
	click2 = click2 + 1;
    if (click2%2==0) {
        banda2.classList.add('banda-2-active'); 
    } else {
        banda2.classList.remove('banda-2-active');
    };
});

/*banda 3*/

var click3 = 1

const banda3 = document.querySelector('.banda-3');

banda3.addEventListener('click', function () {
	click3 = click3 + 1;
    if (click3%2==0) {
        banda3.classList.add('banda-3-active'); 
    } else {
        banda3.classList.remove('banda-3-active');
    };
});

/*banda 4*/

var click4 = 1

const banda4 = document.querySelector('.banda-4');

banda4.addEventListener('click', function () {
	click4 = click4 + 1;
    if (click4%2==0) {
        banda4.classList.add('banda-4-active'); 
    } else {
        banda4.classList.remove('banda-4-active');
    };
});

/*banda 5*/

var click5 = 1

const banda5 = document.querySelector('.banda-5');

banda5.addEventListener('click', function () {
	click5 = click5 + 1;
    if (click5%2==0) {
        banda5.classList.add('banda-5-active'); 
    } else {
        banda5.classList.remove('banda-5-active');
    };
});