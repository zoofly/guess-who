console.log('Here are all the available people:', people);

$(document).ready(onReady);

let currentPerson = "";


function onReady() {
    console.log('Start!')
    displayPictures();
    
}

function displayPictures() {
    console.log('in pictures')
    for (let person of people.sort(function () { return 0.5 - Math.random() })) {
        let url = $(`
        <div class="image"><img src="https://github.com/${person.githubUsername}.png?size=250"
        alt="Profile image of ${person.name}"></div>`);

        url.data(person);
        $('.photos').append(url);
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}