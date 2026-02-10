

galaxy.forEach((array) => {
  const divContainer = document.querySelector(".container");
  const divTitle = document.querySelector(".title");
  
  divTitle.textContent = array.type;
  
  array.items.forEach((item) => {
    const divTitle = document.createElement("a");
    divTitle.textContent = item.name;
    divTitle.dataset.name = item.name;
    divTitle.classList.add("a_item", "hide");
    divContainer.appendChild(divTitle);
  });
});

const main = document.querySelector(".main");
const container = document.querySelectorAll(".container");
const content = document.querySelector(".content");
const detail = document.querySelector(".detail");
let currentA = null;
container.forEach((div) => {
  div.addEventListener("click", (e) => {
    if (e.target.tagName === "DIV") {
      div.querySelectorAll(".a_item").forEach((a) => {
        a.style.display = a.style.display === "block" ? "none" : "block";
      });
    };
  })
})