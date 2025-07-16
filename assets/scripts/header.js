document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll("[data-burger-toggle]");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetSelector = this.getAttribute("data-burger-toggle");
      const targetId = targetSelector.replace("#", "");
      const targetElement = document.querySelector(
        `[data-mobile-menu-id="${targetId}"]`
      );
      const header = document.querySelector(".header");
      const body = document.body;

      if (targetElement) {
        const isOpened = targetElement.classList.toggle("opened");
        this.classList.toggle("active", isOpened);
        header.classList.toggle("mobile-open", isOpened);

        if (isOpened) {
          body.style.overflow = "hidden";
          body.style.height = "100vh";
        } else {
          body.style.overflow = "";
          body.style.height = "";
        }
      }
    });
  });

  const dropdownToggle = document.querySelector(
    ".mobile-menu__my-dropdown-toggle"
  );
  if (dropdownToggle) {
    dropdownToggle.addEventListener("click", function () {
      const dropdown = this.closest(".mobile-menu__my-dropdown");
      const list = dropdown.querySelector(".mobile-menu__my-dropdown-list");

      if (!dropdown.classList.contains("active")) {
        list.style.display = "flex";

        void list.offsetWidth;

        list.style.opacity = "1";
        list.style.transform = "translateX(0)";

        dropdown.classList.add("active");
      } else {
        list.style.opacity = "0";
        list.style.transform = "translateX(100px)";

        setTimeout(() => {
          list.style.display = "none";
          dropdown.classList.remove("active");
        }, 300);
      }
    });
  }
});
