const text = document.querySelector("#textarea");
const choises = document.querySelector(".choises");

text.addEventListener("keyup", function (e) {
  createChoise(e.target.value);
  if (e.key === "Enter") {
    setTimeout(function () {
      e.target.value = "";
    }, 100);
    randomSelect();
  }
});

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => unHighlightTag(randomTag), 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, 100 * 30);
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".choise");

  return tags[Math.floor(Math.random() * tags.length)];
}

function createChoise(input) {
  const tags = input.split(",");

  choises.innerHTML = "";
  tags.forEach((tag) => {
    if (!tag) return;
    const tagEl = document.createElement("span");
    tagEl.classList.add("choise");
    tagEl.innerHTML = tag;
    choises.appendChild(tagEl);
  });
}
