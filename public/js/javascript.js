const menu = document.querySelector(".menu");
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.stopPropagation(); 
    const active = document.querySelector(".menu .active");
    if (active) active.classList.remove("active");
    e.target.classList.add("active");
  }
})
  
document.querySelector(".container").addEventListener("click", e => {
  e.preventDefault(); 
  const title = e.target.closest(".title");
  if (!title) return;
  title.querySelectorAll(".a_item").forEach(item => {
    item.classList.toggle("hide");
  });
});