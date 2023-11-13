import { Link } from "react-router-dom";

export default function Footer ( ) {







    return(
<div id="footer">
<div id="subFooter">
<h2> <a className="footerLinks" target="_blank" href="https://www.linkedin.com/in/rauf-guven-a76791a6/">LinkedIn </a>  </h2>

</div>
<div id="subFooter1">
<h2> <a className="footerLinks" target="_blank" href="https://github.com/mrguven">GitHub </a>  </h2>

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