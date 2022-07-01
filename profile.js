function myFavoriteColorFunc(event) {
    event.preventDefault();

    alert('My favorite color is blue!')
}

function myFavoritePlaceFunc(event) {
    event.preventDefault();

    alert('My favorite place is Colorado!')
}

function myFavoriteRitualFunc(event) {
    event.preventDefault();

    alert('My favorite ritual is a full cup of vanilla flavored coffee to start my day!')
}

let myFavoriteColor = document.querySelector('#color')

myFavoriteColor.addEventListener('click', myFavoriteColorFunc)

let myFavoritePlace = document.querySelector('#place')

myFavoritePlace.addEventListener('click', myFavoritePlaceFunc)

let myFavoriteRitual = document.querySelector('#ritual')

myFavoriteRitual.addEventListener('click', myFavoriteRitualFunc)