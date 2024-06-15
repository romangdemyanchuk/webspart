document.addEventListener("DOMContentLoaded", function() {
    datepicker('.first-calendar .date', {
        language: "en"
    });

    datepicker('.second-calendar .date', {
        language: "en"
    });

    let tilesIconElement = document.querySelector('.tiles-icon');
    let rowsIconElement = document.querySelector('.rows-icon');
    let rowsSection = document.querySelector('.rows-section');
    let tilesSection = document.querySelector('.tiles-section');

    document.body.addEventListener('click', function(event) {
        if (tilesIconElement.contains(event.target)) {
            rowsSection.style.display = 'none';
            tilesSection.style.display = 'block';
            tilesIconElement.classList.add('active');
            rowsIconElement.classList.remove('active')
        }

        if (rowsIconElement.contains(event.target)) {
            rowsSection.style.display = 'block';
            tilesSection.style.display = 'none';
            tilesIconElement.classList.remove('active');
            rowsIconElement.classList.add('active')
        }
    });
});