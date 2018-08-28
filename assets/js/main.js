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

// credit where credit's due; http://thecodeplayer.com/walkthrough/ripple-click-effect-google-material-design

var element, circle, d, x, y;
$("button span").click(function(e){
	console.log("Clicked a span in a button");
  
	element = $(this);
  
	if(element.find(".circle").length == 0)
		element.prepend("<span class='circle'></span>");
		
	circle = element.find(".circle");
	circle.removeClass("animate");
	
	if(!circle.height() && !circle.width())
  {
		d = Math.max(element.outerWidth(), element.outerHeight());
		circle.css({height: d, width: d});
	}
	
	x = e.pageX - element.offset().left - circle.width()/2;
	y = e.pageY - element.offset().top - circle.height()/2;
	
	circle.css({top: y+'px', left: x+'px'}).addClass("animate");
})

$(".button-rectangle").click(function(e){
	console.log("Clicked a button.");
})

$("span").click(function(e){
	console.log("Clicked a span.");
})
