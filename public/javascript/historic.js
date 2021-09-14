const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const select = document.querySelector(".months");

next.addEventListener("click", () => {
  if (select.selectedIndex < 11) {
    select.selectedIndex++;
  }
});

prev.addEventListener("click", () => {
  if (select.selectedIndex > 0) {
    select.selectedIndex--;
  }
});
