const queryParams = new URLSearchParams(window.location.search)
const restaurantId = queryParams.get("restaurantId")

const baseURL = "http://localhost:3000"
const cuisineURL = `${baseURL}/cuisines`
const restaurantURL = `${baseURL}/restaurants`
const locationURL = `${baseURL}/locations`

fetch(`${restaurantURL}/${restaurantId}`)
    .then(response => response.json())
    .then(restaurant => {
        const restaurantCard = document.createElement('section')
        
        restaurantCard.innerHTML = `
        <h1>${restaurant.name}</h1>
        <img src="${restaurant.logo}" />
        <p><label>Rating: </label>${restaurant.rating}</p>
        <p><label>Price: </label>${restaurant.price}</p>
        <p><label>Phone Number: </label>${restaurant.phone_number}</p>
        <p><label>Location: </label>${restaurant.location.neighborhood}<p>
        `
        
        document.body.appendChild(restaurantCard)
    })