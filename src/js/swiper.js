function slideBrands() {
  const brandsInner = document.querySelector(".brands__inner");
  const pagElements = document.querySelectorAll(".brands__round");
  const slideWidth = 262;

  for (let pag of pagElements) {
    pag.addEventListener("click", () => {
      Array.from(pagElements).forEach((item, index) => {
        item.classList.remove("brands__round_active");
      });
      pag.classList.add("brands__round_active");

      const selectedIndex = Array.from(pagElements).indexOf(pag);

      function swichSlide(index) {
        const newPosition = index * slideWidth;
        brandsInner.scrollTo({
          left: newPosition,
          behavior: "smooth"
        });
      }

      swichSlide(selectedIndex);
    });
  }

  brandsInner.addEventListener("touchend", (event) => {
    const scrollWidth = brandsInner.scrollWidth;
    const containerWidth = 262;
    const scrollLeft = brandsInner.scrollLeft;

    if (scrollLeft % containerWidth !== 0) {
      const newScrollLeft = Math.ceil(scrollLeft / containerWidth) * containerWidth;
      const maxScrollLeft = scrollWidth - containerWidth;
      const finalScrollLeft = Math.min(newScrollLeft, maxScrollLeft);
      const activePag = Math.floor(finalScrollLeft / 262);

      brandsInner.scrollTo({
        left: finalScrollLeft,
        behavior: "smooth"
      })
      
      setActivePag(activePag);

      function setActivePag(activePag) {
        Array.from(pagElements).forEach((pag, index) => {
          if (index === activePag) {
            pag.classList.add("brands__round_active");
          } else {
            pag.classList.remove("brands__round_active");
          }
        })
      }
    }
    
  })
}

slideBrands();


function slideDevices() {
  const devicesInner = document.querySelector(".devices__inner");
  const pagElements = document.querySelectorAll(".devices__round");
  const slideWidth = 262;

  for (let pag of pagElements) {
    pag.addEventListener("click", () => {
      Array.from(pagElements).forEach((item, index) => {
        item.classList.remove("devices__round_active");
      });
      pag.classList.add("devices__round_active");

      const selectedIndex = Array.from(pagElements).indexOf(pag);

      function swichSlide(index) {
        const newPosition = index * slideWidth;
        devicesInner.scrollTo({
          left: newPosition,
          behavior: "smooth"
        })
      }

      swichSlide(selectedIndex);
    });
  }

  devicesInner.addEventListener("touchend", (event) => {
    const scrollWidth = devicesInner.scrollWidth;
    const containerWidth = 262;
    const scrollLeft = devicesInner.scrollLeft;

    if (scrollLeft % containerWidth !== 0) {
      const newScrollLeft = Math.ceil(scrollLeft / containerWidth) * containerWidth;
      const maxScrollLeft = scrollWidth - containerWidth;
      const finalScrollLeft = Math.min(newScrollLeft, maxScrollLeft);
      devicesInner.scrollTo({
        left: finalScrollLeft,
        behavior: "smooth",
      })

      const activePag = Math.floor(finalScrollLeft / 262);
      setActivePag(activePag);

      function setActivePag(activePag) {
        Array.from(pagElements).forEach((pag, index) => {
          if (index === activePag) {
            pag.classList.add("devices__round_active");
          } else {
            pag.classList.remove("devices__round_active");
          }
        })
      }
    }
  })
}

slideDevices();

function slidePrice() {
  const pricesInner = document.querySelector(".prices__inner");
  const pagElements = document.querySelectorAll(".prices__round");
  const slideWidth = 262;

  for (let pag of pagElements) {
    pag.addEventListener("click", () => {
      Array.from(pagElements).forEach((item, index) => {
        item.classList.remove("prices__round_active");
      });
      pag.classList.add("prices__round_active");

      const selectedIndex = Array.from(pagElements).indexOf(pag);

      function swichSlide(index) {
        const newPosition = index * slideWidth;
        pricesInner.scrollTo({
          left: newPosition,
          behavior: "smooth"
        })
      }

      swichSlide(selectedIndex);
    }); 
  }

  pricesInner.addEventListener("touchend", (event) => {
    const scrollWidth = pricesInner.scrollWidth;
    const containerWidth = 262;
    const scrollLeft = pricesInner.scrollLeft;

    if (scrollLeft % containerWidth !== 0) {
      const newScrollLeft = Math.ceil(scrollLeft / containerWidth) * containerWidth;
      const maxScrollLeft = scrollWidth - containerWidth;
      const finalScrollLeft = Math.min(newScrollLeft, maxScrollLeft);
      pricesInner.scrollTo({
        left: finalScrollLeft,
        behavior: "smooth"
      })

      const activePag = Math.floor(finalScrollLeft / 262);
      setActivePag(activePag);

      function setActivePag(activePag) {
        Array.from(pagElements).forEach((pag, index) => {
          if (index === activePag) {
            pag.classList.add("prices__round_active");
          } else {
            pag.classList.remove("prices__round_active");
          }
        })
      }
    }
  })
}

slidePrice();


