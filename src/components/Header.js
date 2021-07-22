const Header = () => {
	const header = document.createElement("header");
	const logo = document.createElement("h1");
	const links = document.createElement("ul");
	const hamburger = document.createElement("button");
	const line = document.createElement("div");

	logo.textContent = "Pico";

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

		a.addEventListener("click", () => {
			hamburger.classList.toggle("active_burger");
			links.classList.toggle("active_links");
		});

		return a;
	});

	header.classList.add("container");
	hamburger.classList.add("hamburger");
	line.classList.add("line");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("active_burger");
		links.classList.toggle("active_links");
	});

	links.append(...link);
	hamburger.append(line);
	header.append(logo);
	header.append(links);
	header.append(hamburger);

	return header;
};

export default Header;
