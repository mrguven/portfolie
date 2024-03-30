
import "./homepage.css";
import { useRef } from "react";


export default function Home() {
  const ref = useRef(null);


  return (
    <div id="mainContainerHome">
      <div id="profileDiv">
        <p id="text1" ref={ref}></p>
      </div>
      <div>
      
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
