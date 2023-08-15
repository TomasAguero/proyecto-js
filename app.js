document.addEventListener("DOMContentLoaded", function () {
  const productsList = document.getElementById("products");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const emptyCartButton = document.getElementById("empty-cart");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartUI() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `Producto ${item.id} - $${item.price}`;
      cartItems.appendChild(li);
      total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
  }

  emptyCartButton.addEventListener("click", () => {
    cart.length = 0;
    updateCartUI();
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Carrito vaciado");
  });

  const productsData = [
    { id: 1, name: "TERMO + MATE STANLEY", price: 18000, image: "producto1.jpg" },
    { id: 2, name: "TERMO + MATE STANLEY METALIZADOS", price: 20000, image: "producto2.jpg" },
    { id: 3, name: "PROMO X3 TERMOS METALIZADOS!", price: 40000, image: "producto3.jpg" },

  ];

  productsData.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="img/${product.image}" alt="${product.name}">
      <h3>${product.name} - $${product.price}</h3>
      <button class="add-to-cart" data-id="${product.id}" data-price="${product.price}">Agregar al carrito</button>
    `;
    productsList.appendChild(productElement);
  });

  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.target.getAttribute("data-id"));
      const productPrice = parseFloat(event.target.getAttribute("data-price"));

      const selectedProduct = productsData.find(
        (product) => product.id === productId
      );

      if (selectedProduct) {
        cart.push({ id: selectedProduct.id, price: productPrice });
        updateCartUI();
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`Producto ${selectedProduct.name} agregado al carrito`);
      }
    });
  });

  updateCartUI();
});
