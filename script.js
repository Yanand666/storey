let cart = JSON.parse(localStorage.getItem("cart") || "[]");
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Товар "${name}" додано до кошика!`);
  showProductCard(name, price);
}

function showProductCard(name, price) {
  const card = document.getElementById("selected-product");
  card.classList.remove("hidden");
  card.innerHTML = `
    <img src="${name.includes('Ноутбук') ? 'https://cdn.pixabay.com/photo/2015/05/31/12/14/laptop-791697_1280.jpg' : 'https://cdn.pixabay.com/photo/2016/03/27/22/22/cosmetics-1283992_1280.jpg'}" alt="${name}" />
    <div class="product-info">
      <h3>${name}</h3>
      <p>Ціна: ${price.toLocaleString()} грн</p>
      <button onclick="alert('Оформлення не реалізовано 🚀')">Купити</button>
    </div>
  `;
}
