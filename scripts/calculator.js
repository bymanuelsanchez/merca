function updateResult() {
    const formValue = obtainValues();
    let finalResult;
    finalResult = 0;

    if (formValue.serigrafia) {
        finalResult = formValue.cantidadCamiseta * 2;
    } else if (formValue.vinilo) {
        finalResult = formValue.cantidadCamiseta * 1.5;
    };

    if (formValue.sticker500) {
        finalResult = finalResult + 50;
    } else if (formValue.sticker1000) {
        finalResult = finalResult + 100;
    } else if (formValue.sticker1500) {
        finalResult = finalResult + 150;
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
    
    return {
        serigrafia, vinilo, cantidadCamiseta, sticker500, sticker1000, sticker1500
    }
}