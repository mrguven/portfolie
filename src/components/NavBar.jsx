
import { Link } from "react-router-dom";



export default function NavBar() {





    return(
<nav>
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/costumers">Costumers</Link></li>
  <li><Link to='/mytaxi'>MyTaxi</Link></li>
  <li><Link to='/nssg'>Nssg</Link></li>
  <li><Link to='/stock'>Stock</Link></li>
  <li><Link to="/taxi2">Taxi2</Link></li>
  <li><Link to="/todo">Todo</Link></li>
  <li><Link to='/catchMe'>Catch Me</Link></li>
  <li><Link className="active"  to="/login">Log In</Link></li>
  
</ul>
</nav>

    )
}