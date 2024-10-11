let billAmount = document.querySelector(".input-amount");
let tipAmount = document.querySelectorAll(".tip-percent");
let customTip = document.querySelector(".custom-tip");
let resetBtn = document.querySelector('.reset');
let numOfPeople = document.querySelector(".text");
let totalBill = document.querySelector(".total-amount");
let calculateBtn = document.querySelector(".calculate");
let enteredTip = 0;
let inputTip;


// tip amount

tipAmount.forEach((item) => {
  item.addEventListener("click", (e) => {
    enteredTip = parseFloat(e.target.innerText);

    tipAmount.forEach((btn) => {
      btn.style.backgroundColor = ""; // Reset to default
      btn.style.color = ""; // Reset to default
    });
    e.target.style.backgroundColor = "rgb(205, 14, 205)";
    e.target.style.color = "#fff";
  });
});


// custom tip

  customTip.addEventListener("click", () => {
    customTip.innerHTML = "";
    const customTipInput = document.createElement("input");
    customTipInput.type = "text";
    customTipInput.id = "customTipInput";
    customTipInput.name = "customTip";

    customTip.appendChild(customTipInput);
    customTipInput.focus();
    inputTip = customTipInput;

    for(let i = 0; i<3; i++){
      tipAmount[i].style.backgroundColor = '';
      tipAmount[i].style.color = '';
    }
  });

  // calculating the total bill
  
  calculateBtn.addEventListener("click", () => {
    let inputValue = parseFloat(billAmount.value) || 0;
    let peoplePaying = parseInt(numOfPeople.value) || 1;
    let customTipValue = inputTip ? parseFloat(inputTip.value) : 0;

  // formula for calculating the total bill and splitting

  let tipPercentage = enteredTip || customTipValue;
  // ensure tipPercentage is defined 
  if(!tipPercentage){
    tipPercentage = 0
  }
  let tipAmount = inputValue * (tipPercentage / 100);
  let totalAmount = inputValue + tipAmount;
  let splitBill = totalAmount / peoplePaying;

  totalBill.innerText = splitBill.toFixed(2);
});


// reset 
resetBtn.addEventListener('click', () => {
  billAmount.value = '';
  numOfPeople.value = '';

  tipAmount.forEach((btn) => {
    btn.style.backgroundColor = ""; // Reset background color
    btn.style.color = ""; // Reset text color
  });

  if(inputTip){
    customTip.innerHTML = 'Custom Tip';
  }

  enteredTip = 0;
  inputTip= null;

  totalBill.innerText = '0.00';

})