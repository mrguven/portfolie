//import mrg from './mrg.jpg'
import "./homepage.css";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const textstyle = {
    transform: "scale(2)",
    transition: "4s",
    color: "red",
  };

  window.onload = (evet) => {
    let profil = document.getElementById("profilePicture");
    profil.style.transform = "scale(1.5)";
    profil.style.transition = "3s";
  };

  function getSmall() {
    let profil = document.getElementById("profilePicture");
    profil.style.transform = "scale(1)";
    profil.style.transition = "3s";
    ref.current.style.transform = "scale(1.1)";
    ref.current.style.transition = "4s";
    ref.current.style.color = "red";
    ref.current.style.paddingLeft = "100px";
  }

  function getValueInPut() {}

  return (
    <div id="mainContainerHome">
      <div id="profileDiv">
        <p id="text1" ref={ref}>
          sdfssfdsfdsdfsdfsd
        </p>
      </div>
      {/* <div><img src={mrg} alt="profil" id='profilePicture' onClick={getSmall} /></div> */}
      <div>
        {" "}
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
