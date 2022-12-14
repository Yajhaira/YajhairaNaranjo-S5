const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth')
const prev_mth_element = document.querySelector('.date-picker .dates .prev-mth')
const days_element = document.querySelector('.date-picker .dates .days');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;


//EVENTS LISTENERS
date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

//FUNCTIONS
function toggleDatePicker (e) {
    console.log(e.path);

    if(!checkEventPathForClass(e.path, 'dates')) {
        dates_element.classList.toggle('active');
    }
}

function goToNextMonth(e) {
    month++;
    if(month > 11) {
        month = 0;
        year++;
    }
    mth_element.textContent = months[month] + '' + year;
}

function goToPrevtMonth(e) {
    month--;
    if(month < 0) {
        month = 11;
        year--;
    }
    mth_element.textContent = months[month] + '' + year;
}

//HELPER FUNCTIONS
function checkEventPathForClass (path, selector) {
    for (let i = 0; i < path.length; i++) {
        if(path[i].classList && path[i].classList.contains(selector)) {
            return true;
        }
    }

    return false;
}