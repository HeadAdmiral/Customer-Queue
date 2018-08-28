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
