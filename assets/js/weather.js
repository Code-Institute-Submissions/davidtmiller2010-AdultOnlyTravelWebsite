var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
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
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=c599e8cf88222b89d3d7fce3b12be2a1')
.then(response => response.json())
.then(data => {
    dateValue = data[3]['sys']['dt_txt'];
    descValue = data[3]['weather'][0]['description'];
    iconValue = data[3]['weather'][0]['icon'];
    tempValue = data[3]['main']['temp'];

    date2Value = data[11]['sys']['dt_txt'];
    desc2Value = data[11]['weather'][0]['description'];
    icon2Value = data[11]['weather'][0]['icon'];
    temp2Value = data[11]['main']['temp'];


    date3Value = data[19]['sys']['dt_txt'];
    desc3Value = data[19]['weather'][0]['description'];
    icon3Value = data[19]['weather'][0]['icon'];
    temp3Value = data[19]['main']['temp'];

    date.innerHTML =dateValue;
    desc.innerHTML =descValue;
    icon.innerHTML =iconValue;
    temp.innerHTML =tempValue;

    date2.innerHTML =date2Value;
    desc2.innerHTML =desc2Value;
    icon2.innerHTML =icon2Value;
    temp2.innerHTML =temp2Value;
    
    date3.innerHTML =date3Value;
    desc3.innerHTML =desc3Value;
    icon3.innerHTML =icon3Value;
    temp3.innerHTML =temp3Value;
    })

.catch(err => alert("Please enter a valid city"))

})
