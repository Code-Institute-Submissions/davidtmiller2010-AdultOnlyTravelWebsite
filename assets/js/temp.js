.then(data => {
    nameValue = data['city']['name'];
    dateValue = data['list'][3]['sys']['dt_txt'];
    descValue = data['list'][3]['weather'][0]['description'];
    iconValue = data['list'][3]['weather'][0]['icon'];
    tempValue = data['list'][3]['main']['temp'];

    date2Value = data['list'][11]['sys']['dt_txt'];
    desc2Value = data['list'][11]['weather'][0]['description'];
    icon2Value = data['list'][11]['weather'][0]['icon'];
    temp2Value = data['list'][11]['main']['temp'];

    date3Value = data['list'][19]['sys']['dt_txt'];
    desc3Value = data['list'][19]['weather'][0]['description'];
    icon3Value = data['list'][19]['weather'][0]['icon'];
    temp3Value = data['list'][19]['main']['temp'];

    date.innerHTML =dateValue;
    desc.innerHTML =descValue;
    icon.innerHTML ='http://openweathermap.org/img/wn/'+ iconValue +".png";
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