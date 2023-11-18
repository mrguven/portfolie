import mrg from '../mrg.jpg'
import logo from '../logo.png'
import music from '../music.png'
import checlist from '../checklist.jpg'
import catchMe from '../catchme.jpg'
import taxi from '../taxi.png'
import github from '../gtihub for web.png';
import linkedin from '../linkedin.png'
export default function Home(){




// const open=(links)=>{
//     window.location.href =  links;
// }



    return(




<div id='infoContainer'>
<div id='profil'>
<img src={mrg} alt="profil foto"  id='foto'/>

</div>

<div className='classSubinfo'  id='subInfo'>
<h1>Communicatief, sociaal, gedreven, geordend, analytisch,
     oplossingsgericht, professioneel en resultaatgericht 
     zijn kwaliteiten die mij omschrijven. Ik ben een toegewijde
      medewerker met ervaring in het helpen van organisaties
       om bedrijfsdoelen te behalen en te overtreffen.
       <br />
       Ik heb 
       een passie voor ICT en ik leer snel. Ik heb een oog voor
        detail waarbij ik ICT-knelpunten tijdig identificeer.
         Dit doe ik op een vrolijke en gestructureerde manier zonder aandacht te verliezen voor de organisatiedoelstellingen.
         Ik heb een oog voor
        detail waarbij ik ICT-knelpunten tijdig identificeer.
         Dit doe ik op een vrolijke en gestructureerde manier
          zonder aandacht te verliezen voor de organisatiedoelstellingen.
       </h1>
</div>
<div className='classSubinfo'  id='subInfo-2'>
   <a href="https://www.linkedin.com/in/rauf-guven-a76791a6/" target="https://www.linkedin.com/in/rauf-guven-a76791a6/" > <img src={linkedin} id='linkedId' alt="linkedin" /></a>
   <a href="https://github.com/mrguven"  target="https://github.com/mrguven"><img src={github} id='githubId' alt="github" /></a>
</div>
<div className='classSubinfo'  id='subInfo-3'>
   
</div>
<div id='port'>
    <ul id='portUlList'>
    <li className='portLinks'><a   href="/">Portfolie</a></li>
    <li className='portLinks'><a   href="/mytaxi">MyTaxi </a> </li>
    <li className='portLinks'><a   href="/todo">TodoApp </a> </li>
    <li className='portLinks'><a   href="/catchMe">CatchMe</a>   </li>
 </ul>
</div>



<div className="subCont" id='myTaxi'>
    <img src={taxi} alt="logo" id='taxilogo' />
    <h3 id='taxilogoText'>met die applicatie kan je altijd een taxi reserveren
        om ergens te gaan. Je kan kies een tijd,vertrek en bestemming.
        Na jou ko
    </h3>
</div>
<div className="subCont" id='todo'>
<img src={checlist} alt="logo"  id='checklistImg'/>
<h3 id='checklistText'>Coming Soon</h3>
</div>
<div className="subCont" id='music'>
<img src={music} alt="logo" id='musicImg'/>
<h3 id='musicText'>Coming Soon</h3>
</div>
<div className="subCont" id='catchMe'> 
<img src={catchMe} alt="logo" id='catchMeImg' />
<h3 id='catchMeText'>Coming Soon</h3>
</div>

</div>





       
       

        
    )
}