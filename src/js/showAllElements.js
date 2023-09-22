
function toggleText() {
  const btnShowText = document.querySelector(".description__button");
  const text768 = document.querySelector(".description__text_mt");
  const text1440 = document.querySelector(".description__text_inline");
	const textHidden = document.querySelector(".description__hidden");
  const imgArrow = document.querySelector(".description__img-arrow");
  const btnText = document.querySelector(".description__btn");

  btnShowText.addEventListener("click", () => {
    if (textHidden.style.display == "block") {
      textHidden.style.display = "none";
      text768.style.display = "none";
      text1440.style.display = "none";
      imgArrow.style.rotate = "0deg"
      btnText.innerHTML = "Читать далее"
    } else {
      textHidden.style.display = "block";
      text768.style.display = "block";
      text1440.style.display = "inline";
      imgArrow.style.rotate = "180deg"
      btnText.innerHTML = "Скрыть"
    }
  });
}

toggleText();







