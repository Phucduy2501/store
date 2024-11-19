document.addEventListener("DOMContentLoaded", function () {
  function viewProduct(productId) {
    const product = getProductById(productId);
    alert(`Viewing product: ${product.name}, Price: ${product.salePrice}`);
  }

  function editProduct(productId) {
    const product = getProductById(productId);
    const newName = prompt("Edit product name:", product.name);
    const newPrice = prompt("Edit sale price:", product.salePrice);
    if (newName && newPrice) {
      product.name = newName;
      product.salePrice = newPrice;
      updateTableRow(productId, product);
      alert(`Product updated to: ${product.name}`);
    }
  }

  function deleteProduct(productId) {
    const product = getProductById(productId);
    if (
      confirm(`Are you sure you want to delete the product: ${product.name}?`)
    ) {
      removeTableRow(productId);
      alert(`Product ${product.name} deleted.`);
    }
  }

  function getProductById(productId) {
    const products = [
      { id: 1, name: "Áo sơ mi", salePrice: 110000 },
      { id: 2, name: "Áo thun Paradox", salePrice: 150000 },
      { id: 3, name: "Áo Thun Teelab", salePrice: 80000 },
      { id: 4, name: "Quần Baggy Jean", salePrice: 250000 },
    ];
    return products.find((product) => product.id === productId);
  }

  function updateTableRow(productId, product) {
    const row = document.querySelector(`tr[data-product-id="${productId}"]`);
    if (row) {
      row.cells[2].textContent = product.name;
      row.cells[5].textContent = product.salePrice;
    }
  }

  function removeTableRow(productId) {
    const row = document.querySelector(`tr[data-product-id="${productId}"]`);
    if (row) {
      row.remove();
    }
  }

  document.querySelectorAll(".btn.view").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = getProductIdFromRow(this);
      viewProduct(productId);
    });
  });

  document.querySelectorAll(".btn.edit").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = getProductIdFromRow(this);
      editProduct(productId);
    });
  });

  document.querySelectorAll(".btn.delete").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = getProductIdFromRow(this);
      deleteProduct(productId);
    });
  });

  function getProductIdFromRow(button) {
    const row = button.closest("tr");
    return parseInt(row.getAttribute("data-product-id"));
  }
});
