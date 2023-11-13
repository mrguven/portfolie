import mrg from '../mrg.jpeg'


export default function Home(){








    return(


<div>

<div id='infoContainer'>
<div id='profil'>
<img src={mrg} alt="profil foto"  id='foto'/>
<h2>Wie ben Ik?</h2>
</div>

<div className='classSubinfo'  id='subInfo'>
<h1>Communicatief, sociaal, gedreven, geordend, analytisch,
     oplossingsgericht, professioneel en resultaatgericht 
     zijn kwaliteiten die mij omschrijven. Ik ben een toegewijde
      medewerker met ervaring in het helpen van organisaties
       om bedrijfsdoelen te behalen en te overtreffen.
       </h1>
</div>
<div className='classSubinfo'  id='subInfo-2'>
    <h1> Ik heb 
       een passie voor ICT en ik leer snel. Ik heb een oog voor
        detail waarbij ik ICT-knelpunten tijdig identificeer.
         Dit doe ik op een vrolijke en gestructureerde manier zonder aandacht te verliezen voor de organisatiedoelstellingen.
</h1>
</div>
<div className='classSubinfo'  id='subInfo-3'>
    <h1>Ik heb een oog voor
        detail waarbij ik ICT-knelpunten tijdig identificeer.
         Dit doe ik op een vrolijke en gestructureerde manier
          zonder aandacht te verliezen voor de organisatiedoelstellingen.
</h1>
</div>
<div id='port'>
<h3>Portfolie</h3>
<h3>Taxi Project...</h3>
<h3>Todo App..</h3>
<h3>CatchMe Games..</h3>
</div>



<div className="subCont" id='myTaxi'></div>
<div className="subCont" id='todo'></div>
<div className="subCont" id='catch'></div>
<div className="subCont" id='coming'></div>

</div>





       
       

        </div>
    )
}