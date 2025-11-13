//log in button functionality
document.getElementById('loginButton').addEventListener('click',function(e){
    e.preventDefault();
 const mobileNumber =12345678910;
 const pinNumber = 1234;
 //console.log(document.getElementById('Mobile-number').value);
//console.log(document.getElementById('pin-number').value);
 
 const mobileNumberValue =document.getElementById("Mobile-number").value;
 const mobileNumberValueConverted = parseInt(mobileNumberValue);
 const pinnumbervalue =document.getElementById("pin-number").value;
 const pinnumbervalueconverted = parseInt(pinnumbervalue);
 console.log(mobileNumberValueConverted,pinnumbervalueconverted);
 if(mobileNumber===mobileNumberValueConverted && pinNumber===pinnumbervalueconverted){
     window.location.href="./home.html"
 }
 else{
    alert("invalid number or pin");
 }
}) 