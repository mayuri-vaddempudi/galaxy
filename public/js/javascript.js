const menu = document.querySelector(".menu");
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.stopPropagation(); 
    const active = document.querySelector(".menu .active");
    if (active) active.classList.remove("active");
    e.target.classList.add("active");
  }
})

const sidebar = document.querySelector(".sidebar");
const detail = document.querySelector(".detail");
const content = document.querySelector(".content");
let currentSelected = null;
document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll('.sidebar h3');
  titles.forEach(title => {
    title.addEventListener('click', () => {
      let next = title.nextElementSibling;
      while(next && next.tagName !== "H3") {
        next.classList.toggle('show');
        next = next.nextElementSibling;
      }
    });
  });
const subItems = sidebar.querySelectorAll('.sidebar-item');

  subItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      if(currentSelected === item) {
        content.style.display = "block";
        detail.classList.add("hide");
        detail.innerHTML = "";  
        currentSelected = null;
        return;
      }
      content.style.display = "none";
      detail.classList.remove("hide");
      currentSelected = item;
      detail.innerHTML = `
        <img src= "${item.dataset.img}">
        <div class="desc">
          <h2>${item.dataset.name}</h2>
          <p>${item.dataset.desc || "No description available."}</p>
          <a href= "/${item.dataset.type}/${item.dataset.name}">${item.dataset.name}</a>
        </div>
      `;
    });
  });
});











 


   

