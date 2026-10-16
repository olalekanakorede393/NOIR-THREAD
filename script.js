let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");
const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    cartCount++;

    cartDisplay.textContent = cartCount;

    button.textContent = "Added!";
    
    setTimeout(function () {
      button.textContent = "Add to Bag";
    }, 1000);
  });
});

const newsletterForm = document.getElementById("newsletter-form");
const newsletterMessage = document.getElementById("newsletter-message");

newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  newsletterMessage.textContent =
    "Thank you for subscribing!";

  newsletterForm.reset();
});