let queue;
let modal;
let form;
let login;

window.onload = function(){
  queue = document.getElementById("queue");
  modal = document.getElementById("modal");
  login = document.getElementById("login-container");
  form = document.getElementById("form");
	
}

function showModal() {
  modal.style.display = "block";
  login.style.display = "flex";
}

function hideModal() {
  modal.style.display = "none";
}

function addCustomer(){
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let customer = document.createElement("div");
  
  hideModal();
  
  customer.classList.add("customer");
  customer.innerHTML = firstname + " " + lastname;
  
  queue.appendChild(customer);
  console.log("added customer to queue");
}

$( document ).ready(function() {
    $(".btn").click(function(e) {
	  console.log("Pressed");
    // Remove olds ones
    $(".ripple").remove();

    // Setup
    var posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight = $(this).height();

    // Add the element
    $(this).prepend("<span class='ripple'></span>");

    // Make it round!
    if (buttonWidth >= buttonHeight) {
      buttonHeight = buttonWidth;
    } else {
      buttonWidth = buttonHeight;
    }

    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;

    // Add the ripples CSS and start the animation
    $(".ripple").css({
      width: buttonWidth,
      height: buttonHeight,
      top: y + 'px',
      left: x + 'px'
    }).addClass("rippleEffect");
});
});
