// Input Fields
const customerName = document.getElementById("customerName");
const customerAddress = document.getElementById("customerAddress");
const customerSalary = document.getElementById("customerSalary");

//Table
const customerTable = document.getElementById("customerTable");

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

   let row = 
   `<tr>` +
      `<td>1</td>`+
      `<td>${customer.name}</td>`+
      `<td>${customer.address}</td>`+
      `<td>${customer.salary}</td>`+
   `</tr>`

   customerTable.innerHTML = customerTable.innerHTML + row;

   // // Create a Row.
   // var row = customerTable.insertRow(0);

   // //Creating the number cell
   // var numberCell = row.insertCell(0);
   // numberCell.innerText = 1;

   // // Creating the name cell
   // var nameCell = row.insertCell(1);
   // nameCell.innerText = customer.name;

   // //Creating the address cell.
   // var addressCell = row.insertCell(2);
   // addressCell.innerText = customer.address;

   // //Creating the salary cell
   // var salaryCell = row.insertCell(3);
   // salaryCell.innerText = customer.salary;

}