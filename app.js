import Music from './music.js';
import UI from './ui.js';

const music = new Music();
const ui = new UI();
const selectElement = document.querySelector('#select');

// Grabbing the form and listening for submit
const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchValue = document.querySelector('#search').value;

    music
        .getData(searchValue)
        .then((data) => ui.turnDataToArray(data))
        .then((arr) => ui.render(arr))
        .then(ui.resetForm())
        .catch((err) => console.log(err));
});

// Make "press enter" message gone after 5 seconds
setTimeout(() => {
    document.getElementById('small').style.display = 'none';
}, 5000);

// Select 'change' event
selectElement.addEventListener('change', (event) => {
    const searchValue = document.querySelector('#search').value;

    if (event.target.value === '') {
        music
            .getData(searchValue)
            .then((data) => ui.turnDataToArray(data))
            .then((arr) => ui.render(arr))
            .then(ui.resetForm())
            .catch((err) => console.log(err));
    } else {
        music
            .getData(searchValue)
            .then((data) => ui.turnDataToArray(data))
            .then((arr) => ui.sortArrayOfObjects(arr, event.target.value))
            .then((sortedData) => ui.render(sortedData))
            .catch((err) => console.log(err));
    }
});
