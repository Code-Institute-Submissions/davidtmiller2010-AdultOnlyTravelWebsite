var button = document.querySelector('.button1')
var fromAmount = document.querySelector('amount')
var exchange = document.querySelector('.exchange');
var from = document.querySelector('.from');
var to = document.querySelector('.to');

button.addEventListener('click',function(){
fetch('http://data.fixer.io/api/latest?symbols=' + from + ',' + to + '&access_key=a4d6fa9ce8bfb156d0704dc14a5ec25c')
.then(response => response.json())
.then(data => {
unitFrom = data['rates'][0];
unitTo = data['rates'][1];
unit = unitTo/unitFrom;
exchange.innerHTML =unit.toFixed(2);
})
.catch(err => alert("Please Try Again"))
})
