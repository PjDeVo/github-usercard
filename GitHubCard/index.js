/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

let cards = document.querySelector(".cards");

axios
  .get("https://api.github.com/users/pjdevo")
  .then(response => {
    console.log("here is the response", response);

    let newCard = practiceFunction(response.data);
    console.log(newCard);
    cards.appendChild(newCard);
  })
  .catch(error => {
    console.log("Here is the error message", error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsm",
  "luishrd",
  "bigknell"
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

let practiceFunction = function(obj) {
  let card = document.createElement("div");
  card.classList.add("card");
  let userImage = document.createElement("img");
  userImage.src = obj.avatar_url;

  let cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  let cardName = document.createElement("h3");
  cardName.classList.add("name");
  cardName.textContent = obj.name;
  let cardUserName = document.createElement("p");
  cardUserName.classList.add("username");
  cardUserName.textContent = obj.login;
  let cardLocation = document.createElement("p");
  cardLocation.textContent = `Location: ${obj.location}`;
  let cardProfile = document.createElement("p");
  cardProfile.textContent = "Profile: ";
  let userPageLink = document.createElement("a");
  cardProfile.appendChild(userPageLink);
  userPageLink.href = obj.html_url;
  userPageLink.textContent = obj.html_url;

  let cardFollowers = document.createElement("p");
  cardFollowers.textContent = `Followers: ${obj.followers}`;
  let cardFollowing = document.createElement("p");
  cardFollowing.textContent = `Followers: ${obj.following}`;
  let cardBio = document.createElement("p");
  cardBio.textContent = `Bio: ${obj.bio}`;
  card.appendChild(userImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUserName);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  return card;
};

followersArray
  .forEach(string => {
    axios.get(`https://api.github.com/users/${string}`).then(response => {
      let newCard = practiceFunction(response.data);
      cards.appendChild(newCard);
      console.log("here is the response", response);
    });
  })
  .catch(error => {
    console.log("Hey There, here is your error", error);
  });
