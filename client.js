console.log('Here are all the available people:', people);

$(document).ready(onReady);




function onReady() {
    console.log('Start!')
    displayPictures();
    randomName();
    $('.photos').on('click', '.picture', guess);
}

function displayPictures() {
    console.log('in displayPictures')
    for (let person of people.sort(function () { return  0.5 - Math.random() })) { //idk how this really works. Also read this isn't the best way to randomize data
        let url = $(`
        <div class="image"><img data-name="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250"
        alt="Profile image of ${person.name}"></div>`);

        url.data(person);
        $('.photos').append(url);
    }
    
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
let randomlyChosen = people[Math.floor(Math.random() * people.length)];

function randomName() { //randomizes peopleArray names and populates it on DOM 
    //randomizes items in array from start to end
   
    $('#displayName').empty();
    $('#displayName').append(`<h1> Click on: ${randomlyChosen.name} </h1>`);
    console.log('in randomName', randomlyChosen.name)
}

//TO DO: create a function for guessing
function guess() {
    console.log($(this).closest('img').data('name'))
    if ($(this).closest('img').data('name') === randomlyChosen.name) {
        alert('Correct!')
    } else {
        alert('Try again!')
    }
}

