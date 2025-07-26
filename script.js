window.onload = () => {
  const content = document.getElementById("content");

  const pageContents = {
    home: `
      <h2>Головна сторінка</h2>
      <p>Вітання в StoreY — магазин, де технології зустрічають стиль.</p>
      <p>Тут ви знайдете найкращі пропозиції, акції та переваги нашого магазину.</p>
    `,
    catalog: `
      <h2>Каталог товарів</h2>
      <p>Перегляньте всі доступні товари з можливістю фільтрації та сортування.</p>
    `,
    "product-card": `
      <h2>Картка товару</h2>
      <p>Опис, фото, ціна, характеристики та кнопка “Купити” для вибраного товару.</p>
    `,
    about: `
      <h2>Про нас</h2>
      <p>Історія компанії, місія та цінності.</p>
    `,
    delivery: `
      <h2>Доставка і оплата</h2>
      <p>Інформація про способи доставки та методи оплати.</p>
    `,
    contacts: `
      <h2>Контакти</h2>
      <p>Форма зворотного зв’язку та карта розташування магазину.</p>
    `,
    cart: `
      <h2>Кошик і оформлення замовлення</h2>
      <p>Огляд доданих товарів і можливість оформити замовлення.</p>
    `
  };

  document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      const page = btn.getAttribute("data-page");
      content.innerHTML = pageContents[page] || "<p>Сторінка не знайдена.</p>";
    });
  });
};
function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Товар "${name}" додано до кошика!`);
}
