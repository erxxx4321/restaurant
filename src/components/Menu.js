import menu01 from "../images/thumb1.png";
import menu02 from "../images/thumb2.jpg";
import menu03 from "../images/thumb3.png";

const Menu = () => {
	const menu = document.createElement("div");
	const menuTitle = document.createElement("h2");
	const menuCards = document.createElement("ul");

	let cardList = [
		{
			label: "Pasta Capellini",
			src: menu01,
		},
		{
			label: "Pasta Pillus",
			src: menu02,
		},
		{
			label: "Pasta Fusilli",
			src: menu03,
		},
	];

	menuTitle.textContent = "Best Dishes";

	const cardContent = cardList.map((item) => {
		const card = document.createElement("li");
		const cardImg = document.createElement("img");
		const cardText = document.createElement("p");

		cardText.textContent = item.label;
		cardImg.setAttribute("src", item.src);
		card.classList.add("card");
		card.append(cardImg);
		card.append(cardText);

		return card;
	});

	// style
	menu.classList.add("menu");
	menuCards.classList.add("menu_cards");

	window.addEventListener("load", () => {
		menuTitle.style.opacity = 1;
		menuTitle.style.paddingTop = 0;

		cardContent.forEach((item) => {
			if (window.outerWidth > 700 && isFadeIn(item)) {
				item.style.opacity = 1;
			}
		});
	});

	// animation
	window.addEventListener("scroll", () => {
		cardContent.forEach((item) => {
			if (isFadeIn(item)) {
				item.style.opacity = 1;
			}
		});
	});

	menuCards.append(...cardContent);
	menu.append(menuTitle);
	menu.append(menuCards);

	return menu;
};

export function isFadeIn(element) {
	let elementCard = element.getBoundingClientRect();

	if (elementCard.top - window.innerHeight < -100) {
		return true;
	} else {
		return false;
	}
}

export default Menu;
