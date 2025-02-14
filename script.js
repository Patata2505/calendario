// This file contains the JavaScript functionality for the interactive calendar.

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.color-button');
    const dates = document.querySelectorAll('.calendar-date');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedColor = this.dataset.color;
            dates.forEach(date => {
                date.style.backgroundColor = selectedColor;
            });
        });
    });
});
