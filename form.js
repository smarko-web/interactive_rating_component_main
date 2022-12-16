var mainCard = document.querySelector('.main-card');
var tuCard = document.querySelector('.thankyou-card');
var form = document.querySelector('form');
var numButtons = document.querySelectorAll('label');
var rateRadio = document.querySelectorAll('input[name="rate"]');
var errorMessage = document.querySelector('.error');
var ratNum = document.querySelector('#ratNum');

errorMessage.style.display = 'none';
tuCard.style.display = 'none';
mainCard.style.display = 'flex';


form.addEventListener('submit', (e) => {
    e.preventDefault();

    rateRadio.forEach((item) => {
        if(item.checked) {
            ratNum.innerHTML = item.value;
            mainCard.style.display = 'none';
            tuCard.style.display = 'flex';
        }
        else {
            errorMessage.style.display = 'block';
            setTimeout(function(){
                errorMessage.style.color = 'hsl(217, 12%, 63%)';
            }, 3000);
        }
    });


});