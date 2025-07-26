// Дані товарів (можна доповнювати)
const products = [
  { id: 1, name: "Ноутбук", price: 15000, description: "Потужний ноутбук для роботи і ігор", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Смартфон", price: 9000, description: "Сучасний смартфон з камерою 48 Мп", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Навушники", price: 2500, description: "Безпровідні навушники з гарною якістю звуку", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Клавіатура", price: 1200, description: "Механічна клавіатура з підсвіткою", image: "https://via.placeholder.com/150" }
];

let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function showSection(sectionId) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.toggle("active", section.id === sectionId);
  });
}

function renderProducts(maxPrice = 20000) {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  const filtered = products.filter(p => p.price <= maxPrice);

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";

    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p>Ціна: ${p.price} грн</p>
      <button onclick="addToCart(${p.id})">Купити</button>
    `;

    container.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`Товар "${product.name}" додано до кошика!`);
  renderCart();
}

function renderCart() {
  const ul = document.getElementById("cart-items");
  ul.innerHTML = "";
  if (cart.length === 0) {
    ul.innerHTML = "<li>Кошик порожній</li>";
    return;
  }
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} грн`;
    ul.appendChild(li);
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("Кошик порожній!");
    return;
  }
  alert("Дякуємо за замовлення! Ми з вами зв’яжемося найближчим часом.");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
  showSection("home");
}

// Обробка меню
document.querySelectorAll(".menu button").forEach(btn => {
  btn.addEventListener("click", () => {
    const section = btn.getAttribute("data-section");
    showSection(section);
    if (section === "catalog") renderProducts();
    if (section === "cart") renderCart();
  });
});

// Фільтр за ціною
document.getElementById("priceFilter").addEventListener("input", e => {
  const price = e.target.value;
  document.getElementById("priceValue").textContent = price;
  renderProducts(price);
});

// Кнопка оформлення замовлення
document.getElementById("checkoutBtn").addEventListener("click", checkout);

// Форма контактів
document.getElementById("contactForm