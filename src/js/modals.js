function openCloseCallForm() {
  const openCallForm = document.querySelectorAll("[data-open-call]");
  const closeCallForm = document.querySelector("[data-close-call]");
  const callModal = document.querySelector("[data-call-modal]");
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");

  for (let btnOpenCall of openCallForm) {
    btnOpenCall.addEventListener("click", () => {
      header.style.opacity = "0.1";
      main.style.opacity = "0.1";
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        callModal.classList.remove("order_none");
      }, 400)
    });
  }

  

  closeCallForm.addEventListener("click", () => {
    callModal.classList.add("order_none");
    header.style.opacity = "1";
    main.style.opacity = "1";
    document.body.style.overflow = "";
  })
}

function openCloseFidbackForm() {
  const openFidbackForm = document.querySelectorAll("[data-open-fidback]");
  const closeFidbackForm = document.querySelector("[data-close-fidback]");
  const fidbackModal = document.querySelector("[data-fidback-modal]");
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");

  for (let btnOpenFid of openFidbackForm) {
    btnOpenFid.addEventListener("click", () => {
      header.style.opacity = "0.1";
      main.style.opacity = "0.1";
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        fidbackModal.classList.remove("order_none");
      }, 400)
    });
  }

  

  closeFidbackForm.addEventListener("click", () => {
    header.style.opacity = "1";
    main.style.opacity = "1";
    document.body.style.overflow = "";
    fidbackModal.classList.add("order_none");
  })
}

openCloseCallForm();
openCloseFidbackForm();
