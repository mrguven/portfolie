import ControlPanel from "../components/ControlPanel"
import { useState } from "react"
import nextButton from '../nextButton.png'
import playButton from '../play button.png';
import pauseButton from '../pauseButton.png';
import stopButton from '../stopButton.png'



export default function MyPlayList () {














    return (

<div id="playListContainer">
    <div id="Playlist-Ads"></div>
    <div id="Playlist-Ads-2"></div>
    <div  id="playList-Title">
<h1> MyPlay List</h1>
</div>
<div id="playlistInput"> 
 <input type="text" name="music" id="musicInput" placeholder="music,artists..."/>
 </div>
<div id="searchButton">
<button type="submit" id="search-Music-Button"> Search </button>
</div>


<div id="control-Panel">
    <div id="playlist-Image"></div>
    <div id="music-Info"></div>
    <div id='nextButtonImage'>
        <img className="control-Panel-Image" src={nextButton}  alt="next" />
    </div>
    <div id='playButtonImage'>
        <img className="control-Panel-Image" src={playButton}  alt="play" />
    </div>
    <div id='pauseButtonlImage'>
        <img className="control-Panel-Image" src={pauseButton}  alt="pause" />
    </div>
    <div id='stopButtonlImage'>
        <img className="control-Panel-Image" src={stopButton}  alt="stop" />
    </div>

    <div id="music-Suggestions">
   </div>
</div>

</div>



        
    )
}