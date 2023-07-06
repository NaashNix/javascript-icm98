const customerName = document.getElementById("customerName");
const customerNamePrinted = document.getElementById("customerNamePrinted");

function submitClicked(){
   console.log(customerName.value);
   customerNamePrinted.innerText = customerName.value;
}