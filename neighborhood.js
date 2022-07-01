

function randomRestFunc(event) {
    event.preventDefault();
    let restaurantsArr = ["Bartley's BBQ", "Oldwest Cafe", "Mi Dia From Scratch", "Uncle Julio's"]
    let randomRest = restaurantsArr[Math.floor(Math.random() * restaurantsArr.length)]
    
    alert('I recommend going to ' + randomRest + '!')
}

let randomRestButton = document.querySelector('#random-rest-button')

randomRestButton.addEventListener('click', randomRestFunc)