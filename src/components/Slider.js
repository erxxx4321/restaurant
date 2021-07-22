import arrowLeft from "../images/arrowleft.png";
import arrowRight from "../images/arrowRight.png";

const Slider = () => {
	const slider = document.createElement("div");
	const leftBtn = document.createElement("img");
	const rightBtn = document.createElement("img");
	const slide = document.createElement("div");
	const slideText = document.createElement("span");
	const slideImg = document.createElement("img");

	let count = 0;

	slider.setAttribute("id", "#home");
	leftBtn.setAttribute("src", arrowLeft);
	rightBtn.setAttribute("src", arrowRight);
	slideText.textContent = sliderList[count].text;
	slideImg.setAttribute("src", sliderList[count].src);

	leftBtn.addEventListener("click", () => {
		count -= 1;
		if (count < 0) {
			count = sliderList.length - 1;
		}
		slideText.textContent = sliderList[count].text;
		slideImg.setAttribute("src", sliderList[count].src);
	});

	rightBtn.addEventListener("click", () => {
		count++;
		if (count >= sliderList.length) {
			count = 0;
		}
		slideText.textContent = sliderList[count].text;
		slideImg.setAttribute("src", sliderList[count].src);
	});

	// style
	slider.classList.add("slider");
	slide.classList.add("slide");
	leftBtn.classList.add("leftBtn");
	rightBtn.classList.add("rightBtn");

	slide.append(slideText);
	slide.append(slideImg);
	slider.append(leftBtn);
	slider.append(slide);
	slider.append(rightBtn);

	// fadeIn
	window.addEventListener("load", () => {
		slideText.style.opacity = 1;
	});

	return slider;
};

export default Slider;
