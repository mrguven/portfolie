import ControlPanel from "../components/ControlPanel"
import { useState } from "react"
import nextButton from '../nextButton.png'
import playButton from '../play button.png';
import pauseButton from '../pauseButton.png';
import stopButton from '../stopButton.png'



export default function MyPlayList () {







    return (

<div id="playListContainer">
<h1> MyPlay List</h1>

<div id="playlistInput"> 
 <input type="text" name="music" id="musicInput" placeholder="search..."/>
 </div>
<div id="search-Music-Div">
<button type="submit" id="search-Music-Button"> +</button>
</div>
<div id="music-Suggestions">
    <ul>
        <li></li>
    </ul>
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
</div>

</div>



        
    )
}