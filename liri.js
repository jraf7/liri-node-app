require("dotenv").config();

let keys = require("./keys.js");
let Spotify = require("node-spotify-api")
let fs = require("fs");
let axios = require("axios");
let moment = require("moment");

let spotify = new Spotify(keys.spotify);

let action = process.argv[2];
let search = process.argv.slice(3).join(" ");

function goLiri(action, search) {
    switch (action) {
        case ("concert-this"):
            goConcert(search);
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
};

goLiri(action, search);

function goConcert(search) {

    let URL = `https://api.seatgeek.com/2/events?q=${search}&client_id=${keys.seatGeek.id}`

    axios.get(URL).then(function (response) {
        let concert = response.data.events[0];
        console.log("-----------------------")
        console.log(`
Event:
    ${concert.title}
Performer: 
    ${concert.performers[0].name} 
Venue: 
    ${concert.venue.name}
    ${concert.venue.city}
    ${concert.venue.state}
    ${moment(concert.datetime_local).format("MM/DD/YYYY")}
        `)
        console.log("-----------------------")
    })
    .catch(function (error) {
        console.log("An error has occured: " + error);
    })

};

    function goSong(search) {

    };

    function goMovie(search) {

    };

    function goDo(search) {

    };