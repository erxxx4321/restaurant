import i_name from "../images/input1.png";
import i_mail from "../images/input2.png";
import i_tel from "../images/input3.png";
import i_number from "../images/input4.png";
import { isFadeIn } from "./Menu";

const Form = () => {
	const form = document.createElement("div");
	const formTitle = document.createElement("h2");
	const formBoard = document.createElement("form");
	const submitBtn = document.createElement("button");

	form.setAttribute("id", "book");
	formTitle.textContent = "Book Online";

	let inputList = [
		{
			value: "Your Name",
			type: "text",
			icon: i_name,
		},
		{
			value: "Number of persons",
			type: "number",
			icon: i_number,
		},
		{
			value: "0000-000-000",
			type: "tel",
			pattern: "[0-9]{4}-[0-9]{3}-[0-9]{3}",
			icon: i_tel,
		},
		{
			value: "Your E-Mail",
			type: "mail",
			pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
			icon: i_mail,
		},
		{
			value: "1990-07-22",
			type: "date",
		},
	];

	const inputBoxes = inputList.map((item) => {
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

	formBoard.append(...inputBoxes);
	formBoard.append(submitBtn);
	form.append(formTitle);
	form.append(formBoard);

	return form;
};

export default Form;
