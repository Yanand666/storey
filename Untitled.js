const form = document.getElementById('productForm');
const productList = document.getElementById('productList');

form.addEventListener('submit', event => {
  event.preventDefault();

  const title = form.title.value.trim();
  const price = parseFloat(form.price.value);
  const category = form.category.value.trim();
  const image = form.image.value.trim();
  const description = form.description.value.trim();

  if (!title || !price || !category || !image || !description) {
    alert('Будь ласка, заповніть усі поля!');
    return;
  }

  const li = document.createElement('li');

  const img = document.createElement('img');
  img.src = image;
  img.alt = title;

  const infoDiv = document.createElement('div');
  infoDiv.className = 'product-info';

  const productTitle = document.createElement('h3');
  productTitle.className = 'product-title';
  productTitle.textContent = title;

  const productCategory = document.createElement('p');
  productCategory.className = 'product-category';
  productCategory.textContent = `Категорія: ${category}`;

  const productDescription = document.createElement('p');
  productDescription.className = 'product-description';
  productDescription.textContent = description;

  const productPrice = document.createElement('p');
  productPrice.className = 'product-price';
  productPrice.textContent = `Ціна: ${price.toFixed(2)} €`;

  infoDiv.appendChild(productTitle);
  infoDiv.appendChild(productCategory);
  infoDiv.appendChild(productDescription);
  infoDiv.appendChild(productPrice);

  li.appendChild(img);
  li.appendChild(infoDiv);

  productList.appendChild(li);

  form.reset();
});