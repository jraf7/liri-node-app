# liri-node-app
Language Interpretation and Recognition Interface that will search Spotify for songs, SeatGeek for concerts, and OMDB for movies.

### Instructions
1. Open your terminal (such as Bash or Terminal).

2. Navigate to the folder that contains the `liri.js` file. 
![Step 1 & 2](screenshots/step1.png)

3. Use LIRI by using this format: 
    <br/>
        `node liri.js [command] [parameter]`
    <br/>
- `[Commands]` include:
    - `concert-this`: The system will display a list of all events and locations where the artist or band will perform. It can result in multiple records.![Step 2a](screenshots/step2a.png)
    - `spotify-this-song`: The system will display a list of information associated with the song. It can result in multiple records.![Step 2b](screenshots/step2b.png)
    - `movie-this`: The system will display information associated with the movie. ![Step 2c](screenshots/step2c.png)
    - `do-what-it-says`: The system will read the text in the random.txt file, and perform the command listed in the random.txt file.
    
    
    
- `[parameters]`: is any concert/song/movie to search for.
    
- - -
## TECHNOLOGIES USED
* Javascript
* Nodejs
* Node packages:
    * Node-Spotify
    * Moment
    * DotEnv
    * Axios
* APIs used:
    * Seat Geek
    * OMDB
* Git
* GitHub