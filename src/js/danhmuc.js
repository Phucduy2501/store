document.addEventListener("DOMContentLoaded", () => {
  const viewButtons = document.querySelectorAll(".btn.view");
  const editButtons = document.querySelectorAll(".btn.edit");
  const deleteButtons = document.querySelectorAll(".btn.delete");

  viewButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const row = event.target.closest("tr");
      const productName = row.querySelector("td:nth-child(3)").textContent;
      alert(`Viewing product: ${productName}`);
    });
  });

  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const row = event.target.closest("tr");
      const productName = row.querySelector("td:nth-child(3)").textContent;
      const productImage = row.querySelector("td:nth-child(2) img").src;
      const creationDate = row.querySelector("td:nth-child(4)").textContent;
      const updateDate = row.querySelector("td:nth-child(5)").textContent;
      const status = row.querySelector("td:nth-child(6)").textContent;

      const editForm = `
          <div class="edit-modal">
            <h2>Edit Product</h2>
            <label for="productName">Product Name</label>
            <input type="text" id="productName" value="${productName}" /><br>
            <label for="productImage">Product Image URL</label>
            <input type="text" id="productImage" value="${productImage}" /><br>
            <label for="creationDate">Creation Date</label>
            <input type="text" id="creationDate" value="${creationDate}" /><br>
            <label for="updateDate">Update Date</label>
            <input type="text" id="updateDate" value="${updateDate}" /><br>
            <label for="status">Status</label>
            <input type="text" id="status" value="${status}" /><br>
            <button id="saveEdit">Save</button>
            <button id="cancelEdit">Cancel</button>
          </div>
        `;

      document.body.innerHTML += editForm;

      document.getElementById("saveEdit").addEventListener("click", () => {
        const newProductName = document.getElementById("productName").value;
        const newProductImage = document.getElementById("productImage").value;
        const newCreationDate = document.getElementById("creationDate").value;
        const newUpdateDate = document.getElementById("updateDate").value;
        const newStatus = document.getElementById("status").value;

        row.querySelector("td:nth-child(3)").textContent = newProductName;
        row.querySelector("td:nth-child(2) img").src = newProductImage;
        row.querySelector("td:nth-child(4)").textContent = newCreationDate;
        row.querySelector("td:nth-child(5)").textContent = newUpdateDate;
        row.querySelector("td:nth-child(6)").textContent = newStatus;

        document.querySelector(".edit-modal").remove();
      });
      document.getElementById("cancelEdit").addEventListener("click", () => {
        document.querySelector(".edit-modal").remove();
      });
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const row = event.target.closest("tr");
      const productName = row.querySelector("td:nth-child(3)").textContent;
      const confirmDelete = confirm(
        `Are you sure you want to delete the product: ${productName}?`
      );
      if (confirmDelete) {
        row.remove();
        alert(`${productName} has been deleted.`);
      }
    });
  });
});
