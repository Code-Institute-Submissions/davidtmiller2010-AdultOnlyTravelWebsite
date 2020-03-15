var button = document.querySelector('.button1')
var fromAmount = document.querySelector('amount');
var exchange = document.querySelector('.exchange');
var from = document.querySelector('.from');
var to = document.querySelector('.to');

button.addEventListener('click',function(){
    fetch('https:///openexchangerates.org/api/latest.json?app_id=96957396eceb4037b457215886939270')
    .then(response => response.json())
    .then(data => console.log(data))
.catch(err => alert("Please Try Again"))

})
