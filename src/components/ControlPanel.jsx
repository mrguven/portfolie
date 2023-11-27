import { useState } from "react"
import nextButton from '../nextButton.png'
import './ControlPanel.css'

export default function ControlPanel(){


    let playListContainer={
        display:" grid",
        gridTemplateColumns: "auto auto auto",
        gridTemplateRows: "auto auto auto auto",
        gridArea:'ControlPanel'
      }
      
      
       let controlPanelImage={
         width: '7%'
      }
      

    return(

        <div style={playListContainer}>
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
    <img className="control-Panel-Image" src={nextButton} style={controlPanelImage} alt="" />
</div>


</div>
    )
}