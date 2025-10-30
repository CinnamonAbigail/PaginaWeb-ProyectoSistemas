window.addEventListener("scroll", function () {
    const nav = document.querySelector(".barra-navegacion");
    const logoImg = document.querySelector(".logo img");
  
    if (window.scrollY > 50) {
      nav.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
      nav.style.padding = "10px 30px";
      logoImg.style.height = "80px";
    } else {
      nav.style.boxShadow = "none";
      nav.style.padding = "25px 60px";
      logoImg.style.height = "120px";
    }
  });
  