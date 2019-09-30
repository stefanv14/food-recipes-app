import React from 'react';

import './HeaderSection.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-scroll';


const headerSection = () => {
    return (
        <header className="Header">
            <div className="TextLeft">
                <h1 className="Heading">Food recipes</h1>
                <p>Lorem ipsum dolor sit amet, consectetur addipscing elit. Nunc maximus, nulla ut commodo sagittis sapien dui mattis dui non pulvnar lorem felis nec erat</p><br />
                    <Link   activeClass="active"
                            className="Btn"
                            to="category"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={50}
                            duration={1000}
                        >
                        Categories<ExpandMoreIcon className="Icon" />
                    </Link>
            </div>
        </header>
    )
}

export default headerSection;
