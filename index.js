const baseURL = "http://localhost:3000"
const cuisineURL = `${baseURL}/cuisines`
let restaurantURL = `${baseURL}/restaurants`

const searchParams = new URLSearchParams(window.location.search)
const search_term = searchParams.get("search_term")

if (search_term){
    restaurantURL = `${restaurantURL}?search_term=${search_term}`
}

const restaurantContainer = document.querySelector("#restaurant-card-container")

fetch(restaurantURL)
.then(response => response.json())
.then(restaurants => {

    restaurants.forEach( restaurant => {
        const restaurantCard = document.createElement('div')
        const restaurantName = document.createElement('h1')
        const restaurantImage = document.createElement('img')
        const restaurantInfo = document.createElement('div')
        
        restaurantCard.classList.add("restaurant-show-card")

        restaurantImage.id = "restaurant-card-images"
        
        restaurantName.textContent = restaurant.name
        // `
        // <a href="/showRestaurant.html?restaurantId=${restaurant.id}">${restaurant.name}</a>
        // `

        restaurantImage.src = `${restaurant.logo}`
        
        restaurantInfo.innerHTML = `
        <p><label>Phone Number: </label>${restaurant.phone_number}</p>
        <p><label>Rating: </label>${restaurant.rating}</p>
        <p><label>Price: </label>${restaurant.price}</p>
        <p><label>Location: </label>${restaurant.location.neighborhood}<p>
        `
        restaurantInfo.className = "card-info"

        restaurantCard.append(restaurantName, restaurantImage, restaurantInfo)
        restaurantContainer.append(restaurantCard)
    })
})

const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function surpriseRestaurant() {
    fetch(restaurantURL)
    .then(response => response.json())
    .then(restaurants => {
        let randomNumber = Math.floor(Math.random() * (restaurants.length));
        document.getElementById("surpriseCard").innerHTML = `
        <p><strong>${restaurants[randomNumber].name}</strong></p>
        <img id="back-image" src="${restaurants[randomNumber].logo}">
        <div class="card-info"><p><label>Rating: </label>${restaurants[randomNumber].rating}</p>
        <p><label>Price: </label>${restaurants[randomNumber].price}</p>
        <p><label>Location: </label>${restaurants[randomNumber].location.neighborhood}</p></div>
        <button id="suprise-card-info-button-back" onclick="surpriseRestaurant()">Meh... Next?</button>
        `
    })
}
