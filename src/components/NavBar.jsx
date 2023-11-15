
import { Link } from "react-router-dom";



export default function NavBar() {





    return(
<nav id="navContainer"  >
<ul id='navUl'>
  <li><Link to="/">Home</Link></li>
  <li><Link to='/mytaxi'>MyTaxi</Link></li>
   <li><Link to='/myplaylist'>MyPlay</Link></li>
  <li><Link to="/todo">Todo</Link></li>
  <li><Link to='/catchMe'>CatchMe</Link></li>
  <li><Link className="active"  to="/login">Log In</Link></li>
  
</ul>
</nav>

    )
}