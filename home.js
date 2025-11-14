const validpin = 1234;
const validaccountNumber = 12345678910 ;
document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault();
    //console.log("clickeddddddd");
    const bank = document.getElementById("bank").value;
    const accountNumber = parseInt(document.getElementById("account-number").value);
    //const amount = document.getElementById("amount").value;
    const amountMoney = parseInt (document.getElementById("amount").value);
    const pinNumber = parseInt(document.getElementById("pin-number").value);
   console.log(bank,accountNumber,amountMoney,pinNumber);

   //if i want to add reset field 
   //document.getElementById("bank").value = "";
//document.getElementById("account-number").value = "";
//document.getElementById("amount").value = "";
//document.getElementById("pin-number").value = "";
const availableBalance = parseInt(document.getElementById("available-balance").innerText)
console.log(availableBalance)
if(pinNumber!== validpin){
    alert("invalid pin");
    return;
}
if(validaccountNumber!== accountNumber){
   alert("invalid account number");
   return;
}
const newAvailableBalance =amountMoney + availableBalance;
document.getElementById("available-balance").innerText= newAvailableBalance;
})