import React from 'react'
import InstgramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedIcon from "@material-ui/icons/LinkedIn";
import { Link } from 'react-router-dom';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstgramIcon></InstgramIcon>
        <FacebookIcon />
        <TwitterIcon />

        {/* <a href="https://www.linkedin.com/in/shubham-hanamane-01112922b/"  target="_blank"> 
           <LinkedIcon />
        </a>
        
        */}
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/shubham-hanamane-01112922b/",
          }}
          target="_blank"
        >
          <LinkedIcon />
        </Link>
      </div>
      <p>© 2023</p>
    </div>
  );
}

export default Footer