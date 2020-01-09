require("dotenv").config();

let keys = require("./keys.js");
let Spotify = require("node-spotify-api")
let fs = require("fs");
let axios = require("axios");
let moment = require("moment");
let spotify = new Spotify(keys.spotify);
let action = process.argv[2];
let input = process.argv.slice(3).join(" ");

function goConcert() {
    let URL = `https://api.seatgeek.com/2/events?q=${input}&client_id=${keys.seatGeek.id}`
    axios.get(URL).then(function (response) {
            let concert = response.data.events[0];
            console.log("-----------------------")
            if (concert.title) {
                console.log(`Event: ${concert.title}`)
            }
            if (concert.performers[0].name) {
                console.log(`Performer: ${concert.performers[0].name}`)
            }
            if (concert.venue) {
                console.log(`Venue: 
    ${concert.venue.name}
    ${concert.venue.city}, ${concert.venue.state}
    ${moment(concert.datetime_local).format("MM/DD/YYYY")}`)
            }
            console.log("-----------------------")
        })
        .catch(function (error) {
            console.log("An error has occured: " + error);
        })

};

function goSong(input) {
    console.log("-----------------------")
    if (input === undefined) {
        input = "The Sign";
    }
    spotify.search({
        type: 'track',
        query: input
    }).then(function (response) {
        let song = response.tracks
        for (let i=0; i < 2; i++) {
            console.log("Song name: " + song.items[i].name)
            console.log("Album: " + song.items[i].album.name);
            console.log("Artist(s): " + song.items[i].artists[0].name);
            console.log("-----------------------")
        }
    }).catch(function (error){
        console.log("Error: " + error)
    })
}

function goMovie() {
    let URL = `http://www.omdbapi.com/?apikey=trilogy&t=${input}`
    console.log("-----------------------")
    axios.get(URL).then(function (response) {
        let movie = response.data
        console.log(`
Title: ${movie.Title}
Year: ${movie.Year}
Imdb Rating: ${movie.imdbRating}
Rotten Tomatoes Rating: ${movie.Ratings[0].Value}
Country: ${movie.Country}
Language: ${movie.Language}
Plot: ${movie.Plot}
Actors ${movie.Actors}
`)
        console.log("-----------------------")
    })
};

function goDo(input) {
console.log("-----------------------")
fs.readFile("./random.txt", "utf8", function (error, data) {
    if (error){
        console.log("Error: " + error)
    }
    data = data.split(',');
    action = data[0];
    input = data[1];
    goSong(input);

})
};

function goLiri(action, input) {
    switch (action) {
        case ("concert-this"):
            goConcert(input);
            console.log("Searching for Concerts.")
            break;
        case ("spotify-this-song"):
            goSong(input);
            console.log("Searching for that song.")
            break;
        case ("movie-this"):
            console.log("Searching for your movie.")
            goMovie();
            break;
        case ("do-what-it-says"):
            console.log("Here goes nothing...")
            goDo();
            break;
        default:
            return "Invalid Input";
    }
};

goLiri(action, input);