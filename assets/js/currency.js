var button = document.querySelector(".button1");
var inputValue = document.querySelector(".amount");
var exchange = document.querySelector(".exchange");
var from = document.querySelector(".from");
var to = document.querySelector(".to");
var date1 = document.querySelector(".date1");
var amount = document.querySelector(".amount");

button.addEventListener("click", function() {
  fetch(
    "https://data.fixer.io/api/convert?access_key=a4d6fa9ce8bfb156d0704dc14a5ec25c&from=" +
      from.value +
      "&to=" +
      to.value +
      "&amount=" +
      amount.value
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      exchangeValue = data["result"].toFixed(2);
      exchange.innerHTML = exchangeValue;
    });
});