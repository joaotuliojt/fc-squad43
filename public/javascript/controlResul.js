let calendar = new Calendar("calendar");
let inputDate = document.querySelector("#t2");
let day = document.querySelector(".day");
let week = document.querySelector(".week");
let thirst = document.querySelector(".thirst");
let containerTime = document.querySelector(".containerTime");
let select = document.querySelector(".title-desk");
thirst.innerText = select.value == 1 ? "São Paulo" : "Santos";
select.addEventListener("change", () => {
  let selectValue = select.value;
  thirst.innerText = selectValue == 1 ? "São Paulo" : "Santos";
});

calendar.getElement().addEventListener("change", (e) => {
  inputDate.value = calendar.value().format("YYYY-MM-DD");
  day.innerText = calendar.value().format("DD");
  week.innerText = calendar.value().format("ddd");
  containerTime.classList.add("active");
});

let calendar2 = new Calendar("calendar2");
let inputDate2 = document.querySelector("#t3");
let day2 = document.querySelector("#day2");
let week2 = document.querySelector("#week2");
let thirst2 = document.querySelector("#thirst2");
let containerTime2 = document.querySelector("#containerTime2");
let select2 = document.querySelector("#title-desk2");

thirst2.innerText = select2.value == 1 ? "São Paulo" : "Santos";
select2.addEventListener("change", () => {
  let selectValue = select2.value;
  thirst2.innerText = selectValue == 1 ? "São Paulo" : "Santos";
});

calendar2.getElement().addEventListener("change", (e) => {
  console.log(week2);
  inputDate2.value = calendar2.value().format("YYYY-MM-DD");
  day2.innerText = calendar2.value().format("DD");
  week2.innerText = calendar2.value().format("ddd");
  containerTime2.classList.add("active");
});
