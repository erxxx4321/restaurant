const Header = () => {
	const header = document.createElement("header");
	const logo = document.createElement("h1");
	const links = document.createElement("ul");

	logo.textContent = "PASTA";

	let linkText = [
		{
			title: "Home",
			href: "#home",
		},
		{
			title: "Menu",
			href: "#menu",
		},
		{
			title: "Book",
			href: "#book",
		},
		{
			title: "Contact",
			href: "#footer",
		},
	];

	const link = linkText.map((item) => {
		let a = document.createElement("a");

		a.setAttribute("href", item.href);
		a.textContent = item.title;

		return a;
	});

	links.append(...link);
	header.append(logo);
	header.append(links);

	return header;
};

export default Header;
