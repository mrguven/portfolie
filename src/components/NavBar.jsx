
import { Link } from "react-router-dom";



export default function NavBar() {





    return(
<nav>
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/costumers">costumers</Link></li>
  <li><Link to='/stock'>Stock</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to='/catchMe'>Catch Me</Link></li>
  <li><Link className="active"  to="/login">Log In</Link></li>
  
</ul>
</nav>

    )
}