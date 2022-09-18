import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./pages/style/Header.css"



export default function Navbar() {
  return (
    <div>

<div className="Header">

<div className="HeaderImg1"> <img src="https://www.diversitybiosciences.com/logo.png" alt="img"></img> </div>
<div> <input placeholder="Enter CAS No., Catalog No. Or Product Name" /> </div>
<div className="text">
  <h4>+919948872227</h4>
  <h4>sales@diversitybiosciences.com</h4>
</div>
</div>

  
<nav className="nav">
      <Link to="/" className="site-title">
       
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink> 
        <CustomLink to="/product">Product</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact Us</CustomLink>
       
      </ul>
    </nav>

  

  

    </div>
    
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>

   
  )



  
}
