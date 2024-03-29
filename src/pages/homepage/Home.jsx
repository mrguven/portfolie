//import mrg from './mrg.jpg'
import "./homepage.css";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);


  function getValueInPut() {}

  return (
    <div id="mainContainerHome">
      <div id="profileDiv">
        <p id="text1" ref={ref}></p>
      </div>
      {/* <div><img src={mrg} alt="profil" id='profilePicture' onClick={getSmall} /></div> */}
      <div>
        
        <input
          type="text"
          name="name"
          id="test1"
          onClick={getValueInPut}
        />{" "}
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
