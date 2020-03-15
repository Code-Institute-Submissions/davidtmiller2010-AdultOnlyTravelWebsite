var button = document.querySelector('.button1')
var fromAmount = document.querySelector('amount');
var exchange = document.querySelector('.exchange');
var from = document.querySelector('.from')
;var to = document.querySelector('.to');

button.addEventListener('click',function(){
    fetch('https://api.exchangeratesapi.io/latest?symbols='+ from + ',' + to )
    .then(response => response.json())
    .then(data => {
        unitFrom = data['rates'][0];
        unitTo = data['rates'][1];
        unit = unitTo/unitFrom;
        exchange.innerHTML =unit.toFixed(2);
    
        })
.catch(err => alert("Please Try Again"))

})