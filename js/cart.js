const addProduct = () => {
  const productField = document.getElementById("product");
  const quantityField = document.getElementById("Quantity");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";
  displayItems(product, quantity);
  saveProductToLocalStorage(product, quantity);
};

const displayItems = (productName, productQuantity) => {
  const cartContainer = document.getElementById("cart-container");
  const li = document.createElement("li");
  li.innerText = `${productName ? productName : "nai"} : ${
    productQuantity ? productQuantity : "kichu"
  }`;
  cartContainer.appendChild(li);
};

const getStoredSoppingCart = () => {
  const storedCart = localStorage.getItem("cart");
  let cart = {};
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredSoppingCart();
  cart[product] = quantity;
  const cartStringify = JSON.stringify(cart);
  console.log(cartStringify);
  localStorage.setItem("cart", cartStringify);
};

const displayProductsFromLocalStorage = () => {
  const saveCart = getStoredSoppingCart();
  for (product in saveCart) {
    const quantity = saveCart[product];
    console.log(product, quantity);
    displayItems(product, quantity);
  }
};
displayProductsFromLocalStorage();
