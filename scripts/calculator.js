function updateResult() {
    const formValue = obtainValues();
    let finalResult;
    finalResult = 0;

    if (formValue.serigrafia) {
        finalResult = formValue.cantidadCamiseta * 2; /*camiseta serigrafia 2€*/
    } else if (formValue.vinilo) {
        finalResult = formValue.cantidadCamiseta * 1.5; /*camiseta vinilo 1.5€*/
    };

    if (formValue.sticker500) {
        finalResult = finalResult + 50; /*pegatina .1€*/
    } else if (formValue.sticker1000) {
        finalResult = finalResult + 100;
    } else if (formValue.sticker1500) {
        finalResult = finalResult + 150;
    };

    if (formValue.serigrafiaTote) {
        finalResult = finalResult + formValue.cantidadTote * 1.5; /*tote serigrafia 1.5€*/
    } else if (formValue.viniloTote) {
        finalResult = finalResult + formValue.cantidadTote * 1; /*tote vinilo 1€*/
    };

    if (formValue.a4) {
        finalResult = finalResult + formValue.cantidadPoster * 2; /*poster a4 2€*/
    } else if (formValue.a3) {
        finalResult = finalResult + formValue.cantidadPoster * 3; /*poster a3 3€*/
    } else if (formValue.a2) {
        finalResult = finalResult + formValue.cantidadPoster * 4; /*poster a2 4€*/
    };

    if (formValue.five) {
        finalResult = finalResult + formValue.cantidadChapas * .5; /*chapa 5cm .5€*/
    } else if (formValue.seven) {
        finalResult = finalResult + formValue.cantidadChapas * 1; /*chapa 7cm 1€*/
    } else if (formValue.ten) {
        finalResult = finalResult + formValue.cantidadChapas * 1.5; /*chapa 10cm 1.5€€*/
    };

    document.getElementById('final-result').innerHTML = finalResult;
}

function obtainValues() {
    const serigrafia = document.getElementById('serigrafia').checked;
    const vinilo = document.getElementById('vinilo').checked;
    const cantidadCamiseta = parseInt(document.getElementById('cantidad-camiseta').value);

    const sticker500 = document.getElementById('500').checked;
    const sticker1000 = document.getElementById('1000').checked;
    const sticker1500 = document.getElementById('1500').checked;
    
    const serigrafiaTote = document.getElementById('serigrafia-tote').checked;
    const viniloTote = document.getElementById('vinilo-tote').checked;
    const cantidadTote = parseInt(document.getElementById('cantidad-tote').value);

    const a4 = document.getElementById('a4').checked;
    const a3 = document.getElementById('a3').checked;
    const a2 = document.getElementById('a2').checked;
    const cantidadPoster = parseInt(document.getElementById('cantidad-poster').value);

    const five = document.getElementById('five').checked;
    const seven = document.getElementById('seven').checked;
    const ten = document.getElementById('ten').checked;
    const cantidadChapas = parseInt(document.getElementById('cantidad-chapas').value);

    return {
        serigrafia, vinilo, cantidadCamiseta,
        sticker500, sticker1000, sticker1500,
        serigrafiaTote, viniloTote, cantidadTote,
        a4, a3, a2, cantidadPoster,
        five, seven, ten, cantidadChapas,
    }
}