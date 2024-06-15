const picker1 = datepicker('.first-calendar .date', {
    language: "en"
});

const picker2 = datepicker('.second-calendar .date', {
    language: "en"
});

button.addEventListener('click', e => {
    // THIS!!! Prevent Datepicker's event handler from hiding the calendar.
    e.stopPropagation()

    // Toggle the calendar.
    const isHidden = picker.calendarContainer.classList.contains('qs-hidden')
    picker[isHidden ? 'show' : 'hide']()
})