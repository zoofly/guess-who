console.log('Here are all the available people:', people);

$(document).ready(onReady);




function onReady() {
    console.log('Start!')
    displayPictures();
    randomName();
    // guess()
    // $('img').on('click', '.picture', guess);
}

function displayPictures() {
    console.log('in displayPictures')
    for (let person of people.sort(function () { return  0.5 - Math.random() })) { //idk how this really works. Also read this isn't the best way to randomize data
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


function randomName() { //randomizes peopleArray names and populates it on DOM 
    console.log('in randomName')
    let i = randomNumber(0, people.length - 1); //randomizes items in array from start to end
    let randomlyChosen = "";
    randomlyChosen = people[i].name;
    $('#displayName').empty();
    $('#displayName').append(`<h1> Click on: ${randomlyChosen} </h1>`);
}

//TO DO: create a function for guessing
function guess() {
    console.log('in guess');
    let choice = $(this).data(); 
    let randomlyChosen = "";
    //if the random name on header matches the person picture you win!
    if (randomlyChosen === choice.name) { 
        alert('You win');
        randomName();
    }
    //if click on wrong person, try again
    else {
        alert(`Try again!
        `);
    }
}










// function shuffleArray(people) {
//     var currentIndex = people.length,  randomIndex;
  
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
  
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [people[currentIndex], people[randomIndex]] = [
//         people[randomIndex], people[currentIndex]];
//     }
  
//     return people;
//   }



// function shuffle(people) {
//     var m = people.length, t, i;
  
//     // While there remain elements to shuffle…
//     while (m) {
  
//       // Pick a remaining element…
//       i = Math.floor(Math.random() * m--);
  
//       // And swap it with the current element.
//       t = people[m];
//       people[m] = people[i];
//       people[i] = t;
//     }
  
//     return people;
//   }