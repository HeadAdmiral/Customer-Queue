const queue = document.getElementById("queue");
const modal = document.getElementById("myModal");
const form = document.getElementById("form");

function showModal() {
  modal.style.display = "block";
  console.log("Changed modal to block");
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
}
