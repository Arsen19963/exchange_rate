let currency_El_One = document.getElementById('currency-one');
let amount_El_One = document.getElementById('amount-one');
let amount_El_Two = document.getElementById('amount-two');
let currency_El_Two = document.getElementById('currency-two');

let swap = document.getElementById('swap');
let rateEl = document.getElementById('rate');

function GetRequest() {
  // console.log('hello world');
  let currency_One = currency_El_One.value;
  let currency_Two = currency_El_Two.value;

  fetch(`https://v6.exchangerate-api.com/v6/d1c5c5df2504cbe4bb148357/latest/${currency_One}`)
    .then((response) => response.json())
    .then((data) => {
      let rate = data.conversion_rates[currency_Two];
      rateEl.innerText = `1 ${currency_One} = ${rate} ${currency_Two}`;
      amount_El_Two.value = (amount_El_One.value * rate).toFixed(2);
    });
}

// Swap the currency

function SwapCurrency() {
  let swap = currency_El_One.value;
  currency_El_One.value = currency_El_Two.value;
  currency_El_Two.value = swap;
  GetRequest();
}

// Event listeners
swap.addEventListener('click', SwapCurrency);
currency_El_One.addEventListener('change', GetRequest);
amount_El_One.addEventListener('input', GetRequest);
currency_El_Two.addEventListener('change', GetRequest);
amount_El_Two.addEventListener('input', GetRequest);

SwapCurrency();
