var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var desc2 = document.querySelector('.desc2');
var temp2 = document.querySelector('.temp2');
var desc3 = document.querySelector('.desc3');
var temp3 = document.querySelector('.temp3');

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=c599e8cf88222b89d3d7fce3b12be2a1&units=metric')
.then(response => response.json())
.then(data => {
    descValue = data['list'][3]['weather'][0]['description'];
    tempValue = data['list'][3]['main']['temp'];

    desc2Value = data['list'][11]['weather'][0]['description'];
    temp2Value = data['list'][11]['main']['temp'];

    desc3Value = data['list'][19]['weather'][0]['description'];
    temp3Value = data['list'][19]['main']['temp'];

    desc.innerHTML =descValue;
    temp.innerHTML =tempValue;

    desc2.innerHTML =desc2Value;
    temp2.innerHTML =temp2Value;
    
    desc3.innerHTML =desc3Value;
    temp3.innerHTML =temp3Value;

    })
.catch(err => alert("Please enter a valid city"))

})
