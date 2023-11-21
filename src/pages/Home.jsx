import mrg from '../mrg.jpg'
import logo from '../logo.png'
import music from '../music.png'
import checlist from '../checklist.jpg'
import catchMe from '../catchme.jpg'
import taxi from '../taxi.png'
import github from '../gtihub for web.png';
import linkedin from '../linkedin.png'
import { Link } from 'react-router-dom'

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
       <br /> <br />
       Ik heb 
       een passie voor ICT en ik leer snel. Ik heb een oog voor
        detail waarbij ik ICT-knelpunten tijdig identificeer.
         Dit doe ik op een vrolijke en gestructureerde manier zonder aandacht te verliezen voor de organisatiedoelstellingen.
         <br /> <br />Ik heb een oog voor
        detail waarbij ik ICT-knelpunten tijdig identificeer.
         Dit doe ik op een vrolijke en gestructureerde manier
          zonder aandacht te verliezen voor de organisatiedoelstellingen.
       </h1>
</div>
<div className='classSubinfo'  id='subInfo-2'>
    <div id='linkedinLink'>   <a  href="https://www.linkedin.com/in/rauf-guven-a76791a6/" target="https://www.linkedin.com/in/rauf-guven-a76791a6/" > <img src={linkedin} id='linkedId' alt="linkedin" /></a>
</div>
    <div id='githubLink'>   <a  href="https://github.com/mrguven"  target="https://github.com/mrguven"><img src={github} id='githubId' alt="github" /></a>
</div>
</div>
<div className='classSubinfo'  id='subInfo-3'>
   
</div>
<div id='port'>
    
    <Link className='portLinks' to="/">Portfolie</Link>
    <Link className='portLinks' to='/mytaxi'>MyTaxi </Link> 
    <Link className='portLinks' to="/todo">TodoApp </Link> 
    <Link  className='portLinks' to='/catchMe'>CatchMe</Link>   
 
</div>



<div className="subCont" id='myTaxi'>
<Link id='taxilogo' to="/mytaxi"><img src={taxi} alt="logo"  /></Link> 
    <h3 id='taxilogoText'>Met die applicatie kan je altijd een taxi reserveren
        om ergens te gaan. Je kan kies een tijd,vertrek en bestemming.
       
    </h3>
</div>
<div className="subCont" id='todo'>
<Link to="/todo" id='checklistImg'><img src={checlist} alt="logo"  /></Link>
<h3 id='checklistText'>Je kan met dit app je taken opschrijven. Je kan 
uw afgemaak taken verwijderen.</h3>
</div>
<div className="subCont" id='music'>
<Link to="/myplaylist" id='musicImg'><img src={music} alt="logo" /></Link>
<h3 id='musicText'>Niet afgemaakt maar je kan muziek zoeken en 
luisteren</h3>
</div>
<div className="subCont" id='catchMe'> 
<Link to="/catchMe" id='catchMeImg'><img src={catchMe} alt="logo"  /></Link>
<h3 id='catchMeText'>dat is een web game. Je moet binnen enkele seconden 
op item klikken. Na elke klik heb je een punt. Als je op item
niet klikt,ben je de speel verloren. </h3>
</div>

</div>




       
       

        
    )
}