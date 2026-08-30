let inputDate = document.getElementById("inputDate");
let buttIsLeap = document.getElementById("isLeap");
let buttIsFuture = document.getElementById("isFuture");
let buttNexDay = document.getElementById("nextDay");
let buttTextDate = document.getElementById("textDate");
let result = document.getElementById("result");

class ExtendedDate extends Date {
    constructor() {
        super();
    }
    isFuture() {
        const targetDate = new ExtendedDate();
        return targetDate.getTime() <= this.getTime();
    }
    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    getNextDate() {
        const curentMsDate = this.getTime();
        const msInDay = 24 * 60 * 60 * 1000;
        let ndp = new ExtendedDate(curentMsDate);
        ndp.setTime(curentMsDate + msInDay);
        return ndp.getDate(); 
    }
    getTextDate() {
        const months = [
            "січня", "лютого", "березня", "квітня", "травня", "червня",
            "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
        ];
        return `${this.getDate()} ${months[this.getMonth()]}`;
    }
}

let myDate = new ExtendedDate(inputDate.value);

function btn1() {
    result.value = "";;
    result.value = "Чи високосний рік? " + `${myDate.isLeapYear()}`
}
function btn2() {
    result.value = "";
    result.value = "Чи є майбутнім? " + `${myDate.isFuture()}`;
}
function btn3() {
    result.value = "";
    result.value = "Завтра буде: " + `${myDate.getNextDate()}`;
}
function btn4() {
    result.value = "";
    result.value = `${myDate.getTextDate()}`;
}
function changeDate() {
    let dateInpt = inputDate.value.split("-");
    myDate.setDate(dateInpt[2]);
    myDate.setMonth(dateInpt[1] - 1);
    myDate.setFullYear(dateInpt[0]);
    result.value = `${myDate.getDate()} / ${myDate.getMonth() + 1} / ${myDate.getFullYear()}`;
}


buttIsLeap.addEventListener("click", btn1);
buttIsFuture.addEventListener("click", btn2);
buttNexDay.addEventListener("click", btn3);
buttTextDate.addEventListener("click", btn4);
inputDate.addEventListener("change", changeDate);