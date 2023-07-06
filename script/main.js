// Input Fields
const customerName = document.getElementById("customerName");
const customerAddress = document.getElementById("customerAddress");
const customerSalary = document.getElementById("customerSalary");

// h3 element
const customerNamePrinted = document.getElementById("customerNamePrinted");
const customerAddressPrinted = document.getElementById("customerAddressPrinted");
const customerSalaryPrinted = document.getElementById("customerSalaryPrinted");


function submitClicked(){
   
   let name = customerName.value;
   let address = customerAddress.value;
   let salary = customerSalary.value;

   const customer = {
      name : name,
      address : address,
      salary : salary
   }

   console.log(customer);

}