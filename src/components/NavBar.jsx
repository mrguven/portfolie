
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";


export default function NavBar() {





    return(
<nav id="navContainer"  >
<ul id='navUl'>
  <li><Link to="/"><FaHome /></Link></li>
  <li><Link to="/portfolio">Portfolio</Link></li>
  <li><Link to='/mytaxi'>MyTaxi</Link></li>
   <li><Link to='/myplaylist'>MyPlay</Link></li>
  <li><Link to="/todo">Todo</Link></li>
  <li><Link to='/catchMe'>CatchMe</Link></li>
  <li><Link className="active"  to="/login">Log In</Link></li>
  
</ul>
</nav>

    )
}