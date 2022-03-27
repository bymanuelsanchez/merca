function updateResult() {
    const formValue = obtainValues();
    let finalResult;
    if (formValue.serigrafia) {
        finalResult = formValue.cantidadCamiseta * 2;
    } else if (formValue.vinilo) {
        finalResult = formValue.cantidadCamiseta * 1.5;
    }
    document.getElementById('final-result').innerHTML = finalResult;
}

function obtainValues() {
    const serigrafia = document.getElementById('serigrafia').checked;
    const vinilo = document.getElementById('vinilo').checked;
    const cantidadCamiseta = parseInt(document.getElementById('cantidad-camiseta').value);
    return {
        serigrafia, vinilo, cantidadCamiseta
    }
}