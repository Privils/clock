const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

// Array of month names for proper formatting
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function displayTime() {
    const now = new Date(); // Creating a Date object

    // Get current time values
    const newHour = now.getHours().toString().padStart(2, '0'); 
    const newMinutes = now.getMinutes().toString().padStart(2, '0');
    const newSeconds = now.getSeconds().toString().padStart(2, '0');

    // Getting the current date values
    const newYear = now.getFullYear(); 
    const newDay = now.getDate().toString().padStart(2, '0'); 
    const newMonth = monthNames[now.getMonth()]; // Converting index to month name

    // Updates the text content of the elements
    hour.textContent = `${newHour} :`;
    minutes.textContent = `${newMinutes} :`;
    seconds.textContent = newSeconds;
    year.textContent = newYear;
    day.textContent = newDay;
    month.textContent = newMonth;
}

// Calls the function every second to update the time
setInterval(displayTime, 1000);

// Runs function once to prevent initial delay
displayTime();


