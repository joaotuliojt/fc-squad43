let calendar = new Calendar('calendar');
    let inputDate = document.querySelector('#t2')
    let day = document.querySelector(".day")
    let week = document.querySelector(".week")
    let thirst = document.querySelector(".thirst")
    let containerTime = document.querySelector(".containerTime")
    let select = document.querySelector(".title-desk")
    thirst.innerText = select.value == 1 ? "São Paulo" : "Santos";
    select.addEventListener('change', ()=>{
      let selectValue = select.value;
      thirst.innerText = selectValue == 1 ? "São Paulo" : "Santos";
    });

    calendar.getElement().addEventListener('change', e => {
      inputDate.value = (calendar.value().format('YYYY-MM-DD'));
      day.innerText = (calendar.value().format('DD'));
      week.innerText = (calendar.value().format('ddd'));
      containerTime.classList.add("active");
    });