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
  nextCustomer = document.getElementById("next-customer-name");
}

function updateNextCustomer() {
  if (queue.childNodes.length >= 1){
    nextCustomer.innerText = queue.childNodes[1].innerText;
  }
}

function getNextCustomer() {
  if (queue.childNodes.length >= 1){
    queue.removeChild(queue.childNodes[1]);
    updateNextCustomer();
  }
}

function showModal() {
  modal.style.display = "block";
  login.style.display = "flex";
}

function hideModal() {
  modal.style.display = "none";
}

function addCustomer(){ 
  let firstname = document.getElementById("fn-input").value;
  let lastname = document.getElementById("ln-input").value;
  let customer = document.createElement("div");
	  
  hideModal();
  
  // Create a customer div
  customer.classList.add("customer");
  customer.innerHTML = firstname + " " + lastname;
  
  // Add customer to the queue
  queue.appendChild(customer);
  
  // Update next customer in line
  updateNextCustomer();
  
  // Reset the form
  form.reset();
}
