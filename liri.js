require("dotenv").config();let keys = require("./keys.js");
let Spotify = require("node-spotify-api")

let axios = require("axios");
let moment = require("moment");

let spotify = new Spotify(keys.spotify);
// let seatGeek = new SeatGeek(keys.seatGeek);




let action = process.argv[2];
let search = process.argv.slice(3).join(" ");

switch (action){
    case ("concert-this"):
        goConcert();
        console.log("Searching for Concerts!")
        break;
    case ("spotify-this-song"):
        goSong();
        break;
    case ("movie-this"):
        goMovie();
        break;
    case ("do-what-it-says"):
        goDo();
        break;
    default:
        return "Invalid Input";
}

function goConcert (search) {

let URL = "https://api.seatgeek.com/2/events?client_id=MTk0NDI0Nzl8MTU3MzY1MjY5OS44&performers.slug=" + search

axios.get(URL)
.then( function(response){
    console.log(response.data)
for (let i = 0; i < response.data.events.length; i++){
    console.log(`
    ------------------------------------
    Performer: 
    ${response.data.events[i].performer[0].name}
    Venue: 
    ${response.data.events[i].venue.name}
    ${response.data.events[i].venue.city}
    ${moment(response.data.events[i].datetime_local).format("MM/DD/YYYY")}
    -------------------------------------
    `)
}

})
.catch(function(error) {
    console.log("An error has occured: " + error);
})

};

function goSong (search) {
    
};

function goMovie (search) {
    
};

function goDo (search) {
    
};
