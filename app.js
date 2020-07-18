const title = document.getElementById("title");
const body = document.getElementsByTagName("html")[0];
const svg = Array.from(document.getElementsByTagName("svg"));

title.addEventListener("click", toggle);

let theme = localStorage.getItem("theme");
change();
if (!theme) {
  localStorage.setItem("theme", "light");
  theme = "light";
}

function change() {
  body.style.backgroundColor = theme === "light" ? "#fff" : "#000";
  body.style.color = theme === "light" ? "#000" : "#fff";
  svg.forEach(
    (element) => (element.style.fill = theme === "light" ? "#000" : "#fff")
  );
}

function toggle() {
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);
  change();
}
