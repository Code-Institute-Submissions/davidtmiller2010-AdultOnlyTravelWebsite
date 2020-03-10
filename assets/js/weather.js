var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var icon = document.querySelector('.icon');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=c599e8cf88222b89d3d7fce3b12be2a1')
.then(response => response.json())
.then(data => {
    nameValue = data['name'];
    descValue = data['weather'][0]['description'];
    iconValue = data['weather'][0]['icon'];
    tempValue = data['main']['temp'];

    name.innerHTML =nameValue;
    desc.innerHTML =descValue;
    icon.innerHTML =iconValue;
    temp.innerHTML =tempValue;
    })

.catch(err => alert("Please enter a valid city"))

})
