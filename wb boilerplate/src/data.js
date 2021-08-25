const userTemplate= document.querySelector('.userTemplate');
const styleTemplate = () => {
    const p = document.createElement('h1');
    p.textContent = "loremIpsum"
    p.style.color = "#fff";

    userTemplate.appendChild(p);
}

export { styleTemplate, userTemplate }