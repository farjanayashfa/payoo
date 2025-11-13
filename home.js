document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault();
    //console.log("clickeddddddd");
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    //const amount = document.getElementById("amount").value;
    const amountMoney = parseInt (document.getElementById("amount").value);
    const pinNumber = document.getElementById("pin-number").value;
   console.log(bank,accountNumber,amountMoney,pinNumber);

   //if i want to add reset field 
   //document.getElementById("bank").value = "";
//document.getElementById("account-number").value = "";
//document.getElementById("amount").value = "";
//document.getElementById("pin-number").value = "";
const availableBalance = parseInt(document.getElementById("available-balance").innerText)
console.log(availableBalance)
const newAvailableBalance =amountMoney + availableBalance;
document.getElementById("available-balance").innerText= newAvailableBalance;
})