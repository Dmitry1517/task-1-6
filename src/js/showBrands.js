function allBrands() {
  const btnShowAllBrands = document.querySelector(".description__button_brands");
  const brandsInner = document.querySelector(".brands__inner");
  const imgArrow = document.querySelector(".description__img-arrow_brands");
  const btnText = document.querySelector(".description__btn_brands");

  btnShowAllBrands.addEventListener("click", () => {
    if (brandsInner.style.height !== "auto") {
      brandsInner.style.height = "auto";
      imgArrow.style.rotate = "180deg"
      btnText.innerHTML = "Скрыть"
    } else {
      brandsInner.style.height = "145px";
      imgArrow.style.rotate = "0deg"
      btnText.innerHTML = "Показать все"
    }
    
  })
}

allBrands(); 