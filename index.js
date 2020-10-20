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
        const restaurantInfo = document.createElement('h3')
        
        restaurantCard.classList.add = "restaurant-show-card"
        
        restaurantName.innerHTML = `
        <a href="/showRestaurant.html?restaurantId=${restaurant.id}">${restaurant.name}</a>
        `
        restaurantImage.src = `${restaurant.logo}`
        
        restaurantInfo.innerHTML = `
        <p><label>Rating: </label>${restaurant.rating}</p>
        <p><label>Price: </label>${restaurant.price}</p>
        <p><label>Location: </label>${restaurant.location.neighborhood}<p>
        `

        restaurantCard.append(restaurantName, restaurantImage, restaurantInfo)
        restaurantContainer.append(restaurantCard)
    })
});
