var mainCard = document.querySelector('.main-card');
var tuCard = document.querySelector('.thankyou-card');
var numButtons = document.querySelectorAll('label');
var ratNum = document.querySelector('#ratNum');
var errorMessage = document.querySelector('.error');
var submitButton = document.querySelector('.btn-submit');
var numArray = Array.from(numButtons);

// tuCard.style.display = 'none';


numArray.forEach(item => {
    item.addEventListener('click', () => {
        console.log(document.querySelector('input'));
        ratNum.innerHTML = item.innerHTML;
    });
})
submitButton.addEventListener('click', function(){
    if (!ratNum.innerHTML) {
        // submitButton.innerHTML = 'Please Rate Us';
        // submitButton.style.backgroundColor = 'red';
        // submitButton.style.color = 'white';
        // // set to default
        // setTimeout(function(){
        //     submitButton.innerHTML = 'Submit';
        //     submitButton.style.color = 'white';
        //     submitButton.style.backgroundColor = 'hsl(25, 97%, 53%)';
        // },2000);

        errorMessage.style.display = 'block';
        setTimeout(function(){
            errorMessage.style.color = 'hsl(217, 12%, 63%)';
        }, 3000);
    }
    else {
        mainCard.style.display = 'none';
        tuCard.style.display = 'block';
    }
});