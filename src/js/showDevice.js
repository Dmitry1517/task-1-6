function allDevices() {
  const btnShowAllDevices = document.querySelector(".description__button_device");
  const devicesInner = document.querySelector(".devices__inner");
  const imgArrow = document.querySelector(".description__img-arrow_devices");
  const btnText = document.querySelector(".description__btn_devices");

  btnShowAllDevices.addEventListener("click", () => {
    if (devicesInner.style.height !== "auto") {
      devicesInner.style.height = "auto";
      imgArrow.style.rotate = "180deg"
      btnText.innerHTML = "Скрыть"
    } else {
      devicesInner.style.height = "180px";
      imgArrow.style.rotate = "0deg"
      btnText.innerHTML = "Показать все"
    }
  })
}



allDevices(); 