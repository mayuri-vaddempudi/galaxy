document.querySelector(".container").addEventListener("click", e => {
  e.preventDefault(); 
  const title = e.target.closest(".title");
  if (!title) return;
  title.querySelectorAll(".a_item").forEach(item => {
    item.classList.toggle("hide");
  });
});