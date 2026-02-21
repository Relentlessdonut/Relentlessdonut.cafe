document.addEventListener('DOMContentLoaded', () => {
  const cart = document.querySelector('.cart');
  const cartCount = document.querySelector('.cart-count');
  const cartDropdown = document.querySelector('.cart-dropdown');
  const cartItemsList = document.querySelector('.cart-items');
  const emptyMsg = document.querySelector('.empty-msg');
  const cartTotalEl = document.querySelector('.cart-total');

  let cartItems = [];

  // Add to cart
  document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      const itemName = card.querySelector('h3').textContent;

      // Grab the last <p> in the card for price
      let itemPrice = card.querySelector('p:last-of-type').textContent.trim();

      // Remove $ and any spaces to ensure parseFloat works
      const priceNumber = parseFloat(itemPrice.replace(/[^0-9.]/g, '')) || 0;

      cartItems.push({ name: itemName, price: priceNumber });

      // Update counter
      cartCount.textContent = cartItems.length;

      // Render cart dropdown
      renderCart();
    });
  });

  // Render cart
  function renderCart() {
    cartItemsList.innerHTML = '';

    if (cartItems.length === 0) {
      emptyMsg.style.display = 'block';
      cartTotalEl.textContent = 'Total: $0.00';
    } else {
      emptyMsg.style.display = 'none';
      let total = 0;

      cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} <span>$${item.price.toFixed(2)}</span> <button onclick="removeItem(${index})">x</button>`;
        cartItemsList.appendChild(li);

        total += item.price;
      });

      cartTotalEl.textContent = `Total: $${total.toFixed(2)}`;
    }
  }

  // Remove item
  window.removeItem = function(index) {
    cartItems.splice(index, 1);
    cartCount.textContent = cartItems.length;
    renderCart();
  }

  // Toggle dropdown
  cart.addEventListener('click', (e) => {
    if (!e.target.closest('.cart-dropdown')) {
      cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    }
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', (e) => {
    if (!cart.contains(e.target)) {
      cartDropdown.style.display = 'none';
    }
  });
});