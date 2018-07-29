function showNextCustomer() {
    console.log("This is being registered");
    var customerName = document.getElementById("nextCustomer");
    console.log(customerName);
    customerName.innerText = document.getElementById("customerQueue").firstElementChild.innerHTML;
}