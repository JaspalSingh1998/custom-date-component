import { format, fromUnixTime, getUnixTime } from "date-fns";

const datePickerButton = document.querySelector(".date-picker-button");
const datePicker = document.querySelector(".date-picker");
const datePickerHeaderText = document.querySelector(".current-month");

datePickerButton.addEventListener("click", (e) => {
  datePicker.classList.toggle("show");
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate);
  setupDatePicker(selectedDate);
});

function setDate(date) {
  datePickerButton.textContent = format(date, "MMMM do, y");
  datePickerButton.dataset.selectedDate = getUnixTime(date);
}

function setupDatePicker(selectedDate) {
  datePickerHeaderText.textContent = format(selectedDate, "MMMM - y");
}

setDate(new Date());
