import React from "react";
import './header.css';

const Header66 = () => {

    return (
        <div className="header-container">
            <div className="header-content">
                <div className="icon-logo-header">
                    {/* <image className="logo-cls" src={}></image> */}
                </div>
                <div className="menu-header">
                    <ol className="ul-button-menu">
                        <li className="content__item"><button className="btn-menu">Home</button></li>
                        <li className="content__item"><button className="btn-menu">Studio</button></li>
                        <li><button className="btn-menu">Work</button></li>
                        <li><button className="btn-menu">Press</button></li>
                        <li><button className="btn-menu">Contact</button></li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Header66;