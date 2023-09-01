document.addEventListener("DOMContentLoaded", function () {
  const productsSection = document.getElementById("products");
  const cart = document.getElementById("cart");
  const cartToggle = document.getElementById("cartToggle");
  const cartItems = [];
  const confirmationSection = document.getElementById("confirmation");

  const productsData = [
    {
      id: 1,
      name: "COMBO TERMO Y MATE NEGROS!",
      price: 19000.0,
      image: "img/product1.jpg",
    },
    {
      id: 2,
      name: "COMBO TERMO Y MATE BORDO METALIZADOS",
      price: 23000.0,
      image: "img/product2.jpg",
    },
    {
      id: 3,
      name: "PROMO 3 TERMOS METALIZADOS",
      price: 25000.0,
      image: "img/product3.jpg",
    },
  ];

  function displayProducts() {
    productsData.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h2>${product.name}</h2>
              <p>Precio: $${product.price.toFixed(2)}</p>
              <button class="btn btn-primary add-to-cart" data-product-id="${
                product.id
              }">Agregar al Carrito</button>
          `;
      productsSection.appendChild(productElement);
    });

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", addToCart);
    });
  }

  function addToCart(event) {
    const productId = event.target.getAttribute("data-product-id");
    const selectedProduct = productsData.find(
      (product) => product.id === parseInt(productId)
    );

    if (selectedProduct) {
      cartItems.push(selectedProduct);
      showCart();
    }
  }

  function showCart() {
    cart.innerHTML = "";

    if (cartItems.length === 0) {
      cart.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
      const table = document.createElement("table");
      table.classList.add("table", "table-striped");
      table.innerHTML = `
              <thead>
                  <tr>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Acciones</th>
                  </tr>
              </thead>
              <tbody>
                  <!-- Aquí se agregarán los productos al carrito -->
              </tbody>
          `;

      const tbody = table.querySelector("tbody");
      cartItems.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                  <td>${item.name}</td>
                  <td>$${item.price.toFixed(2)}</td>
                  <td>
                      <button class="btn btn-danger btn-remove" data-product-index="${index}">Eliminar</button>
                      <button class="btn btn-success btn-buy" data-product-index="${index}">Comprar</button>
                  </td>
              `;

        const removeButton = row.querySelector(".btn-remove");
        removeButton.addEventListener("click", removeProduct);

        const buyButton = row.querySelector(".btn-buy");
        buyButton.addEventListener("click", buyProduct);

        tbody.appendChild(row);
      });

      cart.appendChild(table);
    }

    cart.style.right = "0";
  }

  function removeProduct(event) {
    const productIndex = event.target.getAttribute("data-product-index");
    cartItems.splice(productIndex, 1);
    showCart();
  }

  function buyProduct(event) {
    const productIndex = event.target.getAttribute("data-product-index");
    const product = cartItems[productIndex];

    confirmationSection.innerHTML += `<p>Has comprado ${
      product.name
    } por $${product.price.toFixed(2)}</p>`;

    cartItems.splice(productIndex, 1);
    showCart();
  }

  function closeCart() {
    cart.style.right = "-300px";
  }

  cartToggle.addEventListener("click", function () {
    if (cart.style.right === "0px") {
      closeCart();
    } else {
      showCart();
    }
  });

  displayProducts();
});
