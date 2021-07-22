import { isFadeIn } from "./Menu";

const Form = () => {
	const form = document.createElement("div");
	const formTitle = document.createElement("h2");
	const formBoard = document.createElement("form");
	const submitBtn = document.createElement("button");

	form.setAttribute("id", "book");
	formTitle.textContent = "Book Online";

	let inputBoxes = [];

	fetch("http://localhost:3000/formList")
		.then((res) => res.json())
		.then(showInputBox)
		.then(() => {
			formBoard.append(...inputBoxes);
			formBoard.append(submitBtn);
		})
		.catch((error) => console.log("request formList error.", error));

	function showInputBox(data) {
		inputBoxes = data.map((item) => {
			const inputBox = document.createElement("div");
			const input = document.createElement("input");

			input.setAttribute("placeholder", item.value);
			input.setAttribute("type", item.type);
			input.setAttributeNode(document.createAttribute("required"));
			if (item.pattern) {
				input.setAttribute("pattern", item.pattern);
			}
			if (item.icon) {
				const inputIcon = document.createElement("img");
				inputIcon.setAttribute("src", item.icon);
				inputBox.append(inputIcon);
			}

			// style
			inputBox.classList.add("input_box");

			inputBox.prepend(input);

			return inputBox;
		});
	}

	submitBtn.textContent = "Book Now";

	// style
	form.classList.add("form");
	form.classList.add("container");

	// animation
	window.addEventListener("scroll", () => {
		if (isFadeIn(formTitle)) {
			formTitle.style.opacity = 1;
			formTitle.style.paddingTop = 0;
		}
	});

	form.append(formTitle);
	form.append(formBoard);

	return form;
};

export default Form;
