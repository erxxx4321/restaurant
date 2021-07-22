import { isFadeIn } from "./Menu";

const Review = () => {
	const fragment = document.createElement("div");
	const title = document.createElement("h3");
	title.textContent = "Customer Reviews";
	fragment.append(title);

	const reviewList = [
		{
			text: "Lorem ipsum dolor sit amet, consectetur adipisicin,Lorem ipsum dolor sit amet, consectetur adipisicin",
			reviewer: "Customer1",
		},
		{
			text: "Lorem ipsum dolor sit amet, consectetur adipisicin",
			reviewer: "Customer2",
		},
	];

	// content
	const reviewBoxes = reviewList.map((item) => {
		const reviewBox = document.createElement("div");
		const reviewText = document.createElement("p");
		const reviewer = document.createElement("p");

		reviewText.textContent = item.text;
		reviewer.textContent = item.reviewer;

		reviewBox.classList.add("review_box");

		reviewBox.append(reviewText);
		reviewBox.append(reviewer);

		return reviewBox;
	});

	fragment.classList.add("review");
	fragment.append(...reviewBoxes);

	return fragment;
};

const Social = () => {
	const fragment = document.createElement("div");
	fragment.classList.add("social");
	const title = document.createElement("h3");
	title.textContent = "Socialize";
	fragment.append(title);

	// content
	const socialBox = document.createElement("div");
	let socialList = ["facebook", "youtube", "twitter"];

	const socialIcons = socialList.map((item) => {
		const socialLink = document.createElement("a");
		const socialIcon = document.createElement("img");

		switch (item) {
			case "facebook":
				socialLink.setAttribute("href", "https://www.facebook.com/");
				socialIcon.setAttribute("src", "../images/social1.png");
				break;
			case "youtube":
				socialLink.setAttribute("href", "https://www.youtube.com/");
				socialIcon.setAttribute("src", "../images/social2.png");
				break;
			case "twitter":
				socialLink.setAttribute("href", "https://twitter.com/");
				socialIcon.setAttribute("src", "../images/social3.png");
				break;
		}

		socialLink.append(socialIcon);
		return socialLink;
	});

	socialBox.classList.add("social_box");

	socialBox.append(...socialIcons);
	fragment.append(socialBox);

	return fragment;
};

const FeedBack = () => {
	const fragment = document.createElement("div");
	const title = document.createElement("h3");
	title.textContent = "Send feedback";
	fragment.classList.add("feedback");
	fragment.append(title);

	// content
	const feedbackForm = document.createElement("form");
	const feedbackBtn = document.createElement("button");

	let inputList = ["name", "phone", "message"];

	const inputBoxes = inputList.map((item) => {
		const inputBox = document.createElement("div");
		const label = document.createElement("label");
		const input = document.createElement("input");
		switch (item) {
			case "name":
				label.textContent = "Your Name";
				input.setAttribute("type", "text");
				break;
			case "phone":
				label.textContent = "Mobile Number";
				input.setAttribute("type", "tel");
				break;
			case "message":
				label.textContent = "Message";
				input.setAttribute("text", "text");
				break;
		}

		inputBox.classList.add("input_box");

		inputBox.append(label);
		inputBox.append(input);

		return inputBox;
	});
	feedbackBtn.textContent = "Submit";

	// animation
	window.addEventListener("scroll", () => {
		if (isFadeIn(footer)) {
			footer.style.marginTop = 0;
		}
	});

	feedbackForm.append(...inputBoxes);
	feedbackForm.append(feedbackBtn);
	fragment.append(feedbackForm);

	return fragment;
};

const Footer = () => {
	const footer = document.createElement("footer");
	footer.setAttribute("id", "footer");

	footer.append(Review());
	footer.append(Social());
	footer.append(FeedBack());

	return footer;
};

export default Footer;
