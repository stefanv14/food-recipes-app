import React from 'react';

import Logo from '../../assets/Images/LOGO.png';
import Facebook from '../../assets/Icons/FB.png';
import Instagram from '../../assets/Icons/INSTA.png';
import './Footer.css';

const footer = () => {
    return (
        <React.Fragment>
            <footer className="Foo">
                <div className="Logo">
                    <img src={Logo} alt="FOOD Recipes" className="LogoImg"/>
                </div>
                <div className="SocialMedia">
                    <img src={Instagram} alt="instagram" className="Insta"/>
                    <img src={Facebook} alt="facebook" className="Fb"/>
                </div>
            </footer>
            <div className="CopyRight">
                <p>Copyright - Golux Technologies - Stefan Vasilijević</p>
            </div>
        </React.Fragment>
    )
}

export default footer;