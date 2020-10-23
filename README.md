<img src="https://i.imgur.com/o49TYwV.png"/>
<h1>mysterEAT</h1>
An app to help you decide where to eat on a whim.
<br></br>
<h2>General Info</h2>
<p>
mysterEAT is a cutting-edge single-page web-based application that allows users to discover Denver's premier restaurants through an extensive catalog spanning your favorite cuisines. How do we do this you ask?! mysteryEAT delivers a user experience catering to our inner spontaneity by offering users the opportunity to be surprised with a random restaurant suggestion. Additionally, users have the ability to search through the catalog with our cuisine search algorithm. Our mission is to become your app of choice when deciding what to eat with loved ones feels like a mystery.<br>
<br>:heart:</br>
</p>

<h2>Inspiration</h2>

<p>
 Have you ever found yourself in a situation where you were so hungry that everything sounds good, making it a lot harder to choose a restaurant? You're not alone!
 Our app was born with the sole purpose of helping you during those moments of indecisiveness.
</p>

<h2>Intro Video</h2>



<h2>Technologies</h2>

<ul>
 <li>Ruby: version 2.6.5</li>
 <li>Rails: version 6.0.3</li>
 <li>SQLite3: version 1.4</li>
 <li>Puma: version 4.1</li>
 <li>JavaScript: version 1.1.1</li>
 <li>JSON: version 2.3</li>
 <li>Rack CORS: version 1.1.1</li>
</ul>

<h2>Setup</h2>
To run this project, create a folder on your local environment where you can clone the "restaurant-frontend" and "restaurant-backend" GitHub repositories. Open both in your code editor.<br><br>
From your backend folder perform the following commands:<br>
<li>Use the command to install all required gems: <code>bundle install</code></li>
<li>Use the Rails command: <code>rails db:migrate</code></li>
<li>Seed your backend database tables using the following command: <code>rails db:seed</code></li>
<li>Run the backend with command <code>rails s</code></li><br>
From your frontend folder perform the following command: <code>lite-server</code><br><br>
You are now ready to start using the first iteration of mysterEAT!<br>

<i>*Please note that some features are still a work in progress.</i>

<h2>Instructions</h2>
<ol>
 <li>Explore our catalog of Denver's highly-rated restaurants.</li>
 <li>If you're in a hurry & feeling spontaneous take a chance with our mysterEAT button.</li>
 <li>Otherwise, use our search to narrow down the field of restaurant cards by cuisine.</li>
 <li>Still undecided? Allow us to help you by making a restaurant suggestion via our state-of-the-art mysterEAT feature.</li>
 <li>Interested in a different cuisine? Try searching for a new one in the top right or simply click on our logo to return to the main catalog.</li>
</ol>

<h2>Code Examples</h2>

<h4>Randomize Function:</h4>

```
function surpriseRestaurant() {
    fetch(restaurantURL)
    .then(response => response.json())
    .then(restaurants => {
        let randomNumber = Math.floor(Math.random() * (restaurants.length));
        document.getElementById("surpriseCard").innerHTML = `
        <p><strong>${restaurants[randomNumber].name}</strong></p>
        <img id="back-image" src="${restaurants[randomNumber].logo}">
        <div class="card-info">
            <p><label>Rating: </label>${restaurants[randomNumber].rating}</p>
            <p><label>Price: </label>${restaurants[randomNumber].price}</p>
            <p><label>Location: </label>${restaurants[randomNumber].location.neighborhood}</p>
        </div>
        <button id="suprise-card-info-button-back" onclick="surpriseRestaurant()">Meh... Next?</button>
        `
    })
}
```

<h4>Onclick Button for Randomize Function:</h4>

```
<button id="suprise-card-info-button" onclick="surpriseRestaurant()">Your MysterEAT here!</button>
```

<h4>Search Filter:</h4>

```
def index
     if params[:search_term] 
          @restaurants = Restaurant.joins(:cuisine).where(
             "cuisines.name LIKE '%#{params[:search_term]}%'"
         )
     else
         @restaurants = Restaurant.all
     end
        
         render json: @restaurants,  include:[ :location, :cuisine ]
end
```

<h2>App Preview</h2>
<img src="https://i.ibb.co/xmZDVr0/Screen-Shot-2020-10-02-at-10-37-54-AM.png" alt="Welcome Screen" border="0"><br>

<img src="https://i.ibb.co/QksvhH4/Screen-Shot-2020-10-02-at-10-52-47-AM.png" alt="Log in screen">

<h2>User Stories</h2>

<h3>As a user, you will be able to:</h3>

<ol>
<li>Join the Studio Ghibli community.</li>
<li>See a curated list of the top 10 film suggestions based on Rotten Tomatoes scores.</li>
<li>Explore the Studio Ghibli film catalogue.</li>
<li>See and add films to a list of your favorites.</li>
</ol>

<h2>Status</h2>

<p>We set out to match users based on favorite films. We would’ve liked to create an app that delivered on that.</p>

With time, we would've liked to refactor our code and add features such as:
<li>Updating Favorites</li>
<li>Removing Favorites</li>
<li>Match with a Friend</li>
<li>Once a user signs up, returning that user to log in screen.</li>

<h2>Contact</h2>
<a href="https://www.linkedin.com/in/tiffany-kanjanabout/"><img src="https://user-images.githubusercontent.com/68958970/94946276-dc7b8a00-04a9-11eb-9431-366689b9fa06.png" alt="Tiffany Kanjanabout" style="width:10px;height:10px;"></a>Tiffany Kanjanabout :octocat:<br>
<a href="https://www.linkedin.com/in/jonathannoriega/"><img src="https://user-images.githubusercontent.com/68958970/94946276-dc7b8a00-04a9-11eb-9431-366689b9fa06.png" alt="Jon Noriega" style="width:10px;height:10px;"></a>Jon Noriega :ocean:<br>

<h2>API Reference</h2>
[Studio Ghibli API](https://ghibliapi.herokuapp.com/)
