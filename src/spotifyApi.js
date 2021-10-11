import React from 'react';
import axios from "axios"






function spotifyApi() {
    console.log("spotify api is running")
    const spotify = {
        ClientId: "7bfea6f521034095874193ec803ecd69",
        ClientSecret:"520469993a6d4fb3b6928df22681cde2"
    }


    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
    //   setToken(tokenResponse.data.access_token);
        console.log(tokenResponse)

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (genreResponse => {        
        // setGenres({
        //   selectedGenre: genres.selectedGenre,
        //   listOfGenresFromAPI: genreResponse.data.categories.items
            console.log(genreResponse);
        // })
      });
      
    });
    return (
        <div>
            
        </div>
    )
}

export default spotifyApi
