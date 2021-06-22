console.log('Here are all the available people:', people);

$(document).ready(onReady);

let currentPerson = "";


function onReady() {
    console.log('Start!')
    displayPictures();
    
}

function displayPictures() {
    console.log('in displayPictures')
    for (let person of people){ //{ return  0.5 - Math.random() })) {
        let url = $(`
        <div class="image"><img src="https://github.com/${person.githubUsername}.png?size=250"
        alt="Profile image of ${person.name}"></div>`);

        url.data(person);
        shuffleArray(people)
        $('.photos').append(url);
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function shuffleArray(people) {
    var currentIndex = people.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [people[currentIndex], people[randomIndex]] = [
        people[randomIndex], people[currentIndex]];
    }
  
    return people;
  }