var button = document.querySelector('.button1')
var fromAmount = document.querySelector('amount');
var exchange = document.querySelector('.exchange');
var from = document.querySelector('.from');
var to = document.querySelector('.to');

button.addEventListener('click',function(){
fetch('https://free.currconv.com/api/v7/convert?q='+ from + '_' + to + '&compact=ultra&apiKey=7fcad69c743cb87e4a7a')
.then(response => response.json())
.then(data => console.log(data))
.catch(err => alert("Please Try Again"))
})
