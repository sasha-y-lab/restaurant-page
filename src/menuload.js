export const menuload = () => {

    const content = document.querySelector("#content");

    const heading = document.createElement("div");
heading.setAttribute("id", "heading");

const titleh2 = document.createElement("h2");
titleh2.textContent = "Menu";

heading.appendChild(titleh2);

content.appendChild(heading);


}