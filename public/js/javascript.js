console.log("Script loaded");

document.addEventListener("DOMContentLoaded", () => {
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  const detailsPanel = document.getElementById("details-panel");

  if (!detailsPanel) return;

  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      // Highlight active item
      sidebarItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // Get data attributes
      const name = item.dataset.name;
      const img = item.dataset.img;
      const type = item.dataset.type;
      const color = item.dataset.color;
      const diameter = item.dataset.diameter;
      const distance = item.dataset.distance;
      const temp = item.dataset.temp;
      const desc = item.dataset.desc;
      const contact = item.dataset.contact;
      const address = item.dataset.address;

      // Render panel with image on left and details on right
      detailsPanel.innerHTML = `
        <div style="display:flex; align-items:flex-start; gap:20px;">
          ${img ? `<img src="${img}" class="details-img" style="width:200px; height:auto; border-radius:10px;">` : ""}
          <div class="details-text">
            <h1>${name}</h1>
            ${type ? `<p><strong>Type:</strong> ${type}</p>` : ""}
            ${color ? `<p><strong>Color:</strong> ${color}</p>` : ""}
            ${diameter ? `<p><strong>Diameter:</strong> ${diameter}</p>` : ""}
            ${distance ? `<p><strong>Distance:</strong> ${distance}</p>` : ""}
            ${temp ? `<p><strong>Temperature:</strong> ${temp}</p>` : ""}
            ${desc ? `<p class="desc">${desc}</p>` : ""}
            ${contact ? `<p><strong>Contact:</strong> ${contact}</p>` : ""}
            ${address ? `<p><strong>Address:</strong> ${address}</p>` : ""}
          </div>
        </div>
      `;
    });
  });
});
