import mrg from '../mrg.jpg'
import logo from '../logo.png'

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
    <h1> </h1>
</div>
<div className='classSubinfo'  id='subInfo-3'>
    <h1>
</h1>
</div>
<div id='port'>
<h3  > <a href="/">Portfolie</a></h3>
<h3  ><a href="/mytaxi">MyTaxi </a> </h3>
<h3  ><a href="/todo">TodoApp </a></h3>
<h3 > <a href="/catchMe">CatchMe</a>  </h3>
</div>



<div className="subCont" id='myTaxi'>
    <img src={logo} alt="logo" />
    <h3>Coming Soon</h3>
</div>
<div className="subCont" id='todo'>
<img src={logo} alt="logo" />
<h3>Coming Soon</h3>
</div>
<div className="subCont" id='catch'>
<img src={logo} alt="logo" />
<h3>Coming Soon</h3>
</div>
<div className="subCont" id='coming'> 
<img src={logo} alt="logo" />
<h3>Coming Soon</h3>
</div>

</div>





       
       

        
    )
}