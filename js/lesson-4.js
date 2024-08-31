// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).
const boxes = document.querySelector(".number-container")
// const container = document.createElement("div");
// container.classList.add("number-container");
// const boxes = 100;
const fragment = document.createDocumentFragment()
for (let index = 0; index < 100; index++) {
    const div = document.createElement("div");
    div.classList.add("number");
    div.textContent = randomNumber();

    div.textContent  %2 === 0 ? div.classList.add("even"): div.classList.add("odd") 
    fragment.appendChild(div);
}

function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

boxes.append(fragment)
const titleEl = document.querySelector("h1");
titleEl.after(boxes);
// titleEl.before(container);
// titleEl.append(container);
// titleEl.prepend(container);




