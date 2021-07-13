import pasta from "../images/slideimg.png";
import arrowLeft from "../images/arrowleft.png";
import arrowRight from "../images/arrowRight.png";

const Slider = () => {
	const slider = document.createElement("div");
	const leftBtn = document.createElement("img");
	const rightBtn = document.createElement("img");
	const slide = document.createElement("div");
	const slideText = document.createElement("span");
	const slideImg = document.createElement("img");

	let sliderList = [
		{
			title: "slide00 - pasta",
			text: "i like pasta i like pasta, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, excepturi.",
			src: pasta,
		},
		{
			title: "slide01 - burger",
			text: "i like burger i like burger, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, excepturi.",
			src: pasta,
		},
		{
			title: "slide02 - beef",
			text: "i like beef i like beef, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, excepturi.",
			src: pasta,
		},
	];

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
	slider.classList.add("container");
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
