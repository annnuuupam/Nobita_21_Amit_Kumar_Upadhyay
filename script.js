//user feedback on successful add
function addedToCart(pname) {
    var message = pname + " was added to the cart";
    var alerts = document.getElementById("alerts");
    alerts.innerHTML = message;
    if(!alerts.classList.contains("message")){
       alerts.classList.add("message");
    }
  }