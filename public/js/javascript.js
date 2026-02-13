

const menu = document.querySelector(".menu");
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    const active = menu.querySelector(".active");
    if (active) active.classList.remove("active");
    e.target.classList.add("active");
  }
})

const icon = document.querySelector(".icon");
if (icon && menu) {
  icon.addEventListener("click", () => {
    // 修复：切换菜单显示状态
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  });
}

  if (document.body.classList.contains("home-page")) {
    const sidebar = document.querySelector(".sidebar");
    const detail = document.querySelector(".detail");
    const content = document.querySelector(".content");
    let currentSelected = null;

    // 侧边栏分类标题点击展开/折叠
    const titles = document.querySelectorAll('.sidebar h3');
    titles.forEach(title => {
      title.addEventListener('click', () => {
        let next = title.nextElementSibling;
        while (next && next.tagName !== "H3") {
          next.classList.toggle('show');
          next = next.nextElementSibling;
        }
      });
    });

    // 侧边栏项目点击
    const subItems = sidebar ? sidebar.querySelectorAll('.sidebar-item') : [];
    subItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (currentSelected === item) {
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
          <img src="${item.dataset.img}">
          <div class="desc">
            <h2>${item.dataset.name}</h2>
            <p>${item.dataset.desc || "No description available."}</p>
            <a href="/${item.dataset.type}/${item.dataset.name.toLowerCase()}">${item.dataset.name}</a>
          </div>
        `;
      });
    });
  }

  // 详情页逻辑
  if (document.body.classList.contains("detail-page")) {
    const sidebarItems = document.querySelectorAll(".sidebar-item");
    const detailsPanel = document.getElementById("details-panel");

    if (detailsPanel) {
      sidebarItems.forEach(item => {
        item.addEventListener("click", (e) => {
          e.preventDefault();

          const type = item.dataset.type;
          const name = item.dataset.name;
          const url = `/${type}/${name}`.toLowerCase();
          window.location.href = url;
          
        });
      });
       const currentPath = window.location.pathname.toLowerCase();
        sidebarItems.forEach(item => {
            const type = item.dataset.type;
            const name = item.dataset.name;
            const itemPath = `/${type}/${name}`.toLowerCase();
            if (currentPath === itemPath) {
                item.classList.add("active-side");
            }
        });
    }
  
};






 


   

