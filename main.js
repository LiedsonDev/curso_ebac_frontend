const form = document.getElementById('form-validacao');

function comparaNumero(a, b) {
    return a < b;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const elementA = document.getElementById('number-a');
    const elementB = document.getElementById('number-b');

    const numA = document.getElementById('number-a').value;
    const numB = document.getElementById('number-b').value;

    if (comparaNumero(numA, numB) == true) {
        document.querySelector('.success-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    
        elementA.value = '';
        elementB.value = '';
    } else if (comparaNumero(numA, numB) == false) {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';

        elementA.value = '';
        elementB.value = '';
    }
});

