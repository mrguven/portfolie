import { Link } from "react-router-dom";

export default function Footer ( ) {







    return(
<div id="footer">
<div id="subFooter">
<h2> <Link className="footerLinks" target="https://www.linkedin.com/in/rauf-guven-a76791a6/" to="https://www.linkedin.com/in/rauf-guven-a76791a6/">LinkedIn </Link>  </h2>

</div>
<div id="subFooter1">
<h2> <Link className="footerLinks" target="https://github.com/mrguven" to="https://github.com/mrguven">GitHub </Link>  </h2>

</div>
<div id="subFooter2">
 <h2> <Link className="footerLinks" target="_blank" to="/contact">Contact </Link>  </h2>

</div>
<div id="subFooter3">

<h2 className="footerLinks">info@heshe.nl </h2>
</div>


</div>





    )
}