function allBrands() {
  const btnShowAllBrands = document.querySelector(".description__button_brands");
  const brandsGrid = document.querySelector(".brands__slider");
  const imgArrow = document.querySelector(".description__img-arrow_brands");
  const btnText = document.querySelector(".description__btn_brands");

  btnShowAllBrands.addEventListener("click", () => {
    if (brandsGrid.style.height !== "auto") {
      brandsGrid.style.height = "auto";
      imgArrow.style.rotate = "180deg"
      btnText.innerHTML = "Скрыть"
    } else {
      brandsGrid.style.height = "145px";
      imgArrow.style.rotate = "0deg"
      btnText.innerHTML = "Показать все"
    }
  })
}

allBrands(); 