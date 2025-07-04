import { React, useState, useEffect } from "react";
import './navbar.css';
import { Link } from "react-router-dom";



function Navbar() {
  const [isDesktop, setIsDesktop] = useState(window.matchMedia('(min-width: 768px)').matches);
  const [Shownavitem, setShownavitem] = useState(false);

  const toggleNavItems = () => {
    setShownavitem(!Shownavitem);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleResize = () => setIsDesktop(mediaQuery.matches);

    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return (
    <>
      {isDesktop ? (
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/Accomodations">Accomodations</Link>
          <Link to="/Gallery">Gallery</Link>

          <div className="logo">
            <Link to="/"><img src="./assets/whitelogo.png" alt="ritik" /></Link>
          </div>

          <Link to="/event&activities">Events &<br />Activities</Link>
          <Link to="/contactus">Contact us</Link>
          <Link to="/aboutus">About</Link>
        </div>
      ) : (
        <>
          <div className="mobile-nav">
            <div className="mobile-logo">
              <Link to="/"><img src="./assets/whitelogo.png" alt="ritik" /></Link>
            </div>
            <div onClick={toggleNavItems} className="menu-icon"><img src="./assets/svgs/hamburger.svg" alt="" /></div>

            <div className={`navlinks  ${Shownavitem ? 'show' : 'hide'}`}>
              <Link to="/">Home</Link>
              <Link to="/Accomodations">Accomodations</Link>
              <Link to="/event&activities">Events & Activities</Link>
              <Link to="/Gallery">Gallery</Link>
              <Link to="/contactus">Contact us</Link>
              <Link to="/aboutus">About</Link>
              <div className="navcontactnumber">
                <img src="./assets/svgs/phone.svg" alt="" />
               <p><Link to ="#">9999785857</Link> , <Link to="#" >9999785857</Link></p>
              </div>
            </div>
          </div>
        </>
      )
      }
    </>

  );
}


export default Navbar;