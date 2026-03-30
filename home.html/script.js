document.addEventListener('DOMContentLoaded', () => {

  const cart = document.querySelector('.cart');
  const cartCount = document.querySelector('.cart-count');
  const cartDropdown = document.querySelector('.cart-dropdown');
  const cartItemsList = document.querySelector('.cart-items');
  const emptyMsg = document.querySelector('.empty-msg');
  const cartTotalEl = document.querySelector('.cart-total');

  let cartItems = [];

  // 
  document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', (e) => {

      const card = e.target.closest('.card');
      const itemName = card.querySelector('h3, h4').textContent;

      let itemPrice = card.querySelector('p:last-of-type').textContent.trim();
      const priceNumber = parseFloat(itemPrice.replace(/[^0-9.]/g, '')) || 0;

      cartItems.push({ name: itemName, price: priceNumber });

      cartCount.textContent = cartItems.length;

      renderCart();

      // 🔥 SHOW DROPDOWN
      cartDropdown.style.display = 'block';

    });
  }); 

  // 
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
        li.innerHTML = `
          ${item.name}
          <span>$${item.price.toFixed(2)}</span>
          <button onclick="removeItem(${index})">x</button>
        `;
        cartItemsList.appendChild(li);

        total += item.price;
      });

      cartTotalEl.textContent = `Total: $${total.toFixed(2)}`;
    }
  }

  // 
  window.removeItem = function(index) {
    cartItems.splice(index, 1);
    cartCount.textContent = cartItems.length;
    renderCart();
  };

  // 
  cart.addEventListener('click', () => {
    if (cartDropdown.style.display === 'block') {
      cartDropdown.style.display = 'none';
    } else {
      cartDropdown.style.display = 'block';
    }
  });

  // 
  document.addEventListener('click', (e) => {
    if (!cart.contains(e.target)) {
      cartDropdown.style.display = 'none';
    }
  });

  // 
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // 
  ScrollReveal().reveal('.card', {
    distance: '40px',
    duration: 800,
    easing: 'ease-out',
    origin: 'bottom',
    interval: 200
  });

  ScrollReveal().reveal('.hero-content', {
    distance: '50px',
    duration: 1000,
    origin: 'top'
  });

});