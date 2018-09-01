let queue;
let modal;
let form;
let login;
let nextCustomer;

window.onload = function(){
  queue = document.getElementById("queue");
  modal = document.getElementById("modal");
  login = document.getElementById("login-container");
  form = document.getElementById("form");
	
}

function getNextCustomer() {
  nextCustomer = queue.childNodes[1].innerText;
  console.log(nextCustomer);
}

function showModal() {
  modal.style.display = "block";
  login.style.display = "flex";
}

function hideModal() {
  modal.style.display = "none";
}

function addCustomer(){
  console.log(queue);
  getNextCustomer();
  
  let firstname = document.getElementById("fn-input").value;
  let lastname = document.getElementById("ln-input").value;
  let customer = document.createElement("div");
	
  console.log(firstname);
	
  
  hideModal();
  
  customer.classList.add("customer");
  customer.innerHTML = firstname + " " + lastname;
  
  queue.appendChild(customer);
  console.log("added customer to queue");
}
