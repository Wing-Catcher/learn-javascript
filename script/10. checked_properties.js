// .checked = property that determines the checked state of HTML checkbox
//            or radio button element

const subscribe = document.getElementById("myCheck");
const visa = document.getElementById("visaBtn");
const mastercard = document.getElementById("masterBtn");
const paypal = document.getElementById("paypalBtn");
const submit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function(){
    if (subscribe.checked){
        subResult.textContent = "Thanks for subscribing!"
        if (visa.checked){
            paymentResult.textContent = "You are now choosing Visa as payment method"
        }
        else if (mastercard.checked){
            paymentResult.textContent = " You are now choosing MasterCard as payment method"
        }
        else if (paypal.checked){
            paymentResult.textContent = " You are now choosing PayPal as payment method"
        }
        else {
            paymentResult.textContent = "You do not choosing the payment method"
        }
    }
    else{
        subResult.textContent = "Please subscribe to continue"
        paymentResult.textContent = ""
    }
}