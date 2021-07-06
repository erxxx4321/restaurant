import facebookIcon from "../images/social1.png";
import youtubeIcon from "../images/social2.png";
import twitterIcon from "../images/social3.png";

const Footer = () => {
	const footer = document.createElement("footer");
	footer.setAttribute("id", "footer");

	// review
	const review = document.createElement("div");
	const reviewTitle = document.createElement("h3");
	reviewTitle.textContent = "Customer Reviews";
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

	// style
	review.classList.add("review");

	review.append(reviewTitle);
	review.append(...reviewBoxes);

	// social
	const social = document.createElement("div");
	const socialTitle = document.createElement("h3");
	socialTitle.textContent = "Socialize";

	const socialBox = document.createElement("div");
	let socialList = ["facebook", "youtube", "twitter"];

	const socialIcons = socialList.map((item) => {
		const socialIcon = document.createElement("img");

		switch (item) {
			case "facebook":
				socialIcon.setAttribute("src", facebookIcon);
				break;
			case "youtube":
				socialIcon.setAttribute("src", youtubeIcon);
				break;
			case "twitter":
				socialIcon.setAttribute("src", twitterIcon);
				break;
		}
		return socialIcon;
	});

	social.classList.add("social");
	socialBox.classList.add("social_box");

	socialBox.append(...socialIcons);
	social.append(socialTitle);
	social.append(socialBox);

	// feedback
	const feedback = document.createElement("div");
	const feedbackTitle = document.createElement("h3");
	const feedbackForm = document.createElement("form");
	const feedbackBtn = document.createElement("button");

	feedbackTitle.textContent = "Send feedback";

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

	// style
	feedback.classList.add("feedback");

	feedbackForm.append(...inputBoxes);
	feedbackForm.append(feedbackBtn);
	feedback.append(feedbackTitle);
	feedback.append(feedbackForm);

	footer.append(review);
	footer.append(social);
	footer.append(feedback);

	return footer;
};

export default Footer;
