import { useState } from "react"
import nextButton from '../nextButton.png'
import playButton from '../play button.png';
import pauseButton from '../pauseButton.png';
import stopButton from '../stopButton.png'

export default function ControlPanel(){




    return(

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
<div id="playlist-Image"></div>
<div id="control-Panel">
    <img className="control-Panel-Image" src={nextButton} id='nextButtonImage' alt="next" />
</div>
<div>
<img className="control-Panel-Image" src={playButton} id='playButtonImage' alt="play" />
</div>
<div>
<img className="control-Panel-Image" src={pauseButton} id='pauseButtonlImage' alt="pause" />
</div>
<div>
<img className="control-Panel-Image" src={stopButton} id='stopButtonlImage' alt="stop" />
</div>
<div></div>

</div>
    )
}