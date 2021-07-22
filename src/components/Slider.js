const Slider = () => {
	const slider = document.createElement("div");
	const leftBtn = document.createElement("img");
	const rightBtn = document.createElement("img");
	const slide = document.createElement("div");
	const slideText = document.createElement("span");
	const slideImg = document.createElement("img");

	let count = 0;

	let sliderList;
	let requestURL = "http://localhost:3000/sliderList";
	let request = new XMLHttpRequest();
	request.open("GET", requestURL, true);
	request.responseType = "json";
	request.send();

	request.onload = () => {
		const data = request.response;
		sliderList = [...data];

		slider.setAttribute("id", "#home");
		leftBtn.setAttribute("src", "../images/arrowleft.png");
		rightBtn.setAttribute("src", "../images/arrowRight.png");
		slideText.textContent = sliderList[count].text;
		slideImg.setAttribute("src", sliderList[count].src);
	};

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
