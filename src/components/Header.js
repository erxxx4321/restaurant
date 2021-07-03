import ".././index.scss";

const Header = () => {
	const header = document.createElement("header");
	const logo = document.createElement("h1");
	const links = document.createElement("ul");

	logo.textContent = "PASTA";

	let linkText = [
		{
			title: "HOME",
			href: "#home",
		},
		{
			title: "ABOUT",
			href: "#about",
		},
		{
			title: "LOCATIONS",
			href: "#menu",
		},
		{
			title: "CONTACT",
			href: "#contact",
		},
	];

	const link = linkText.map((item) => {
		let li = document.createElement("li");
		li.setAttribute("href", item.href);
		li.textContent = item.title;

		return li;
	});

	links.append(...link);
	header.append(logo);
	header.append(links);

	return header;
};

export default Header;
