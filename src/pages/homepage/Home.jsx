import mrg from './mrg.jpg'
import './homepage.css';


export default function Home(){





window.onload=evet=>{

  let profil= document.getElementById('profilePicture')
profil.style.transform= 'scale(1.5)';
profil.style.transition='3s'

}

function getSmall(){
  let profil= document.getElementById('profilePicture');
profil.style.transform= 'scale(1)';
profil.style.transition='3s'
}

function getValueInPut(){

}


    return(
<div id='mainContainerHome' >

  <div id='profileDiv'>  
   <p id='text1' >sdfssfdsfdsdfsdfsd</p>


    
  </div>
  <div><img src={mrg} alt="profil" id='profilePicture' onClick={getSmall} /></div>
  <div> <input type="text" name="name" id="test1" onClick={getValueInPut} />  </div>
  <div></div>
  <div></div>
  <div></div>
   


</div>

    )
}