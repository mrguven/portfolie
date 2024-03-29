import ControlPanel from "../../components/ControlPanel";
import { useState } from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';


export default function MyPlayList() {
  return (
    <div id="playListContainer">
      <div id="Playlist-Ads"></div>
      <div id="Playlist-Ads-2"></div>
      <div id="playList-Title">
        <h1> MyPlay List</h1>
      </div>
      <div id="playlistInput">
        <input
          type="text"
          name="music"
          id="musicInput"
          placeholder="music,artists..."
        />
      </div>
      <div id="searchButton">
        <button type="submit" id="search-Music-Button">
          {" "}
          Search{" "}
        </button>
      </div>

      <div id="control-Panel">
        <div id="playlist-Image"></div>
        <div id="music-Info"></div>
        <div id="nextButtonImage">
          <SkipNextIcon />
        </div>
        <div id="playButtonImage">
          <PlayCircleOutlineIcon />
        </div>
        <div id="pauseButtonlImage">
          <PauseCircleOutlineIcon />
        </div>
        <div id="stopButtonlImage">
          <StopCircleIcon />
        </div>

        <div id="music-Suggestions"></div>
      </div>
    </div>
  );
}
