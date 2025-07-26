function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  location.reload();
}

window.onload = () => {
  const lang = localStorage.getItem("lang") || "uk";
  const translations = {
    welcome: {
      uk: "Ласкаво просимо до StarkStore",
      en: "Welcome to StarkStore"
    },
    tagline: {
      uk: "Магазин, де технології зустрічають стиль.",
      en: "Where tech meets style."
    }
  };
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[key]) {
      el.textContent = translations[key][lang];
    }
  });

  if (document.getElementById("cart-items")) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const ul = document.getElementById("cart-items");
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.price} грн`;
      ul.appendChild(li);
    });
  }
};

function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Додано до кошика!");
}