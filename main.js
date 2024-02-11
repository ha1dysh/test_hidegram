function genElements(el) {
	return Array.from(
		{ length: 50 },
		(_, i) => `<${el}>Array of scrollable elements ${i + 1}</${el}>`
	).join("");
}

const ul = document.querySelector("ul");
ul.innerHTML = genElements("li");

const main = document.querySelector("main");
main.innerHTML = genElements("p");
