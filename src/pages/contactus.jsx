import React from 'react';
import './contactus.css';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';
import Form from '../components/form.jsx';
import ScrollToTop from '../rarecomponents/scrolltotop.jsx';

function Contactus() {

    return (
        <>
            <ScrollToTop />
            <Navbar />

            <div className="imagesection"><img src="./src/assets/main.jpg" alt="" /></div>

            <div className="contactinfo">

                <div className="contactcard">
                    <h1>Rahul Yadav</h1>
                    <p>9999785857</p>
                    <p>rahul@email.com</p>
                    <p>instagram</p>
                </div>
                <div className="contactcard">
                    <h1>Lalit Yadav</h1>
                    <p>9898989899</p>
                    <p>lalit@email.com</p>
                    <p>instagram</p>
                </div>
                <div className="contactcard">
                    <h1>socials</h1>
                    <p></p>
                    <p>lalit@email.com</p>
                    <p>instagram</p>
                </div>
            </div>

            <div className="instagram">
                <div className="username">
                    <img src="./src/assets/logo.png" alt="" />
                    <h1>ananyagreens</h1>
                </div>

                <div className="postcards">
                    <div className="postcard"></div>
                    <div className="postcard"></div>
                    <div className="postcard"></div>
                    <div className="postcard"></div>
                </div>
            </div>

            <Form />

            <Footer />

        </>

    )
}
export default Contactus;   