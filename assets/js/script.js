const toggleSwitch = document.querySelector("#toggleSwitch");
const basicPrice = document.querySelector("#basic-price");
const professionalPrice = document.querySelector("#professional-price");
const masterPrice = document.querySelector("#master-price");

toggleSwitch.addEventListener("click", function () {
  if (toggleSwitch.checked) {
    basicPrice.innerText = " 199.99";
    professionalPrice.innerText = " 249.99";
    masterPrice.innerText = " 399.99";
  } else {
    basicPrice.innerText = " 19.99";
    professionalPrice.innerText = " 24.99";
    masterPrice.innerText = " 39.99";
  }
});
