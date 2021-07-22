const Arrow = () => {
	const arrow = document.createElement("img");
	arrow.setAttribute("src", "../images/arrowtop.png");
	arrow.classList.add("arrow");

	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 100) {
			arrow.style.opacity = 1;
		} else {
			arrow.style.opacity = 0;
		}
	});

	arrow.addEventListener("click", () => {
		window.scrollTo(0, 0);
	});

	return arrow;
};

export default Arrow;
