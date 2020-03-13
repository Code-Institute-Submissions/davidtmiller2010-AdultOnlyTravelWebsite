var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var date = document.querySelector('.date');
var desc = document.querySelector('.desc');
var icon = document.querySelector('.icon');
var temp = document.querySelector('.temp');
var date2 = document.querySelector('.date2');
var desc2 = document.querySelector('.desc2');
var icon2 = document.querySelector('.icon2');
var temp2 = document.querySelector('.temp2');
var date3 = document.querySelector('.date3');
var desc3 = document.querySelector('.desc3');
var icon3 = document.querySelector('.icon3');
var temp3 = document.querySelector('.temp3');

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=c599e8cf88222b89d3d7fce3b12be2a1&units=metric')
.then(response => response.json())
.then( data => console.log())
}
.catch(err => alert("Please enter a valid city"))

})
