var mainCard = document.querySelector('.main-card');
var tuCard = document.querySelector('.thankyou-card');
var form = document.querySelector('form');
var rateRadio = document.querySelectorAll('input[name="rate"]');
var errorMessage = document.querySelector('.error');
var ratNum = document.querySelector('#ratNum');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    rateRadio.forEach((item) => {
        if(item.checked) {
            ratNum.innerHTML = item.value;
            mainCard.classList.add('none');
            tuCard.classList.remove('none');
        }
        else {
            errorMessage.classList.remove('none');
            setTimeout(function(){
                errorMessage.classList.toggle('error-To');
            }, 3000);
        }
    });


});