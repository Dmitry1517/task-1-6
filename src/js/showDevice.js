function allDevices() {
  const btnShowAllDevices = document.querySelector(".description__button_device");
  const devicesGrid = document.querySelector(".devices__grid");
  const imgArrow = document.querySelector(".description__img-arrow_devices");
  const btnText = document.querySelector(".description__btn_devices");

  btnShowAllDevices.addEventListener("click", () => {
    if (devicesGrid.style.height !== "auto") {
      devicesGrid.style.height = "auto";
      imgArrow.style.rotate = "180deg"
      btnText.innerHTML = "Скрыть"
    } else {
      devicesGrid.style.height = "180px";
      imgArrow.style.rotate = "0deg"
      btnText.innerHTML = "Показать все"
    }
  })
}

allDevices(); 