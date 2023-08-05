import '../Stylesheets/all.css';
import '../Stylesheets/Navbar.css';
import { useEffect, useState } from 'react';
import $ from 'jquery';

//Using Custom Entities
import Image from '../Custom_entities/image';


const Navbar = ({}) => {

    return(<>
        <nav className="flex center-y f_direction_v navbar" >
            <div className="nav-header">
                <i style={{display: 'inline-block', position: 'relative', minWidth: '200px', maxWidth: '300px', flex: '1'}}><Image src="assets/images/mpm-roxas-banner.png" style={{maxWidth: '100%', minWidth: '200px'}} /></i>
                <span class="btn-close-mobile" 
                onClick={() => {
                    const nav = document.querySelector('.navbar');
                    const content = document.querySelector('.content');

                    nav.style.width = '0';
                    $('.navbar').css({paddingLeft: '0', width: '0', boxShadow: 'none'});
                    content.style.left = '0';
                }}>
                <i className="fas fa-window-close icn"></i>
                </span>
            </div>
            <NavItem name="OUR BEGINNING" target="beginning" />
            <NavItem name="OUR MISSION" target="mission" />
            <NavItem name="OUR METHOD" target="method" />
            <NavItem name="COMMITMENT" target="commitment" />
            <NavItem name="LEADERS" target="leaders"/>
            <NavItem name="CONTACT US" target="contact-us"/>
        </nav>
    </>);
}

const NavItem = ({name = 'Nav item', target}) => {
    return (<>
        <div className="flex center nav-item" target={target} onClick={() => {
            const target_elem = document.querySelector(`.section-item[target=${target}]`).scrollIntoView();
            // window.scrollBy(0, -70)
        }}>
            {name}
        </div>
    </>
    )
}


export default Navbar;