import icon01 from "../images/icon1.png";
import icon02 from "../images/icon2.png";
import icon03 from "../images/icon3.png";
import icon04 from "../images/icon4.png";
import icon05 from "../images/icon5.png";

const Form = () => {
	const form = document.createElement("div");
	const formTitle = document.createElement("h2");
	const formBoard = document.createElement("form");
	const submitBtn = document.createElement("button");

	formTitle.textContent = "Book Online";

	let inputList = [
		{
			value: "Your Name",
			type: "text",
			icon: icon01,
		},
		{
			value: "Your E-Mail",
			type: "mail",
			icon: icon02,
		},
		{
			value: "Your Phone Number",
			type: "tel",
			icon: icon03,
		},
		{
			value: "07-03-2021",
			type: "date",
			icon: icon04,
		},
		{
			value: "Number of persons",
			type: "number",
			icon: icon05,
		},
	];

	const inputBoxes = inputList.map((item) => {
		const inputBox = document.createElement("div");
		const input = document.createElement("input");
		const inputIcon = document.createElement("img");

		input.setAttribute("type", item.type);
		input.setAttribute("placeholder", item.value);
		inputIcon.setAttribute("src", item.icon);

		input.addEventListener("click", () =>
			input.setAttribute("placeholder", "")
		);

		// style
		inputBox.classList.add("input_box");

		inputBox.append(input);
		inputBox.append(inputIcon);

		return inputBox;
	});

	submitBtn.textContent = "Book Now";

	// style
	form.classList.add("form");

	formBoard.append(...inputBoxes);
	formBoard.append(submitBtn);
	form.append(formTitle);
	form.append(formBoard);

	return form;
};

export default Form;
