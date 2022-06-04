function bootnavbar(options) {
  const defaultOption = {
    selector: "main_navbar",
    animation: true,
    animateIn: "animate__fadeIn",
  };

  const bnOptions = { ...defaultOption, ...options };

  init = function () {
    var dropdowns = document
      .getElementById(bnOptions.selector)
      .getElementsByClassName("dropdown");

    Array.prototype.forEach.call(dropdowns, (item) => {
      //add animation
      if (bnOptions.animation) {
        const element = item.querySelector(".dropdown-menu");
        element.classList.add("animate__animated");
        element.classList.add(bnOptions.animateIn);
      }

      //hover effects
      item.addEventListener("mouseover", function () {
        if (window.innerWidth > 768) {
          this.classList.add("show");
          const element = this.querySelector(".dropdown-menu");
          element.classList.add("show");
        }
      });

      item.addEventListener("mouseout", function () {
        this.classList.remove("show");
        const element = this.querySelector(".dropdown-menu");
        element.classList.remove("show");
      });
    });
  };

  init();
}

$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');
  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
    $('.dropdown-submenu .show').removeClass("show");
  });
  return false;
});