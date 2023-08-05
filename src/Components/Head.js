import { useEffect, useRef, useState } from 'react';
import '../Stylesheets/Head.css';
import $ from 'jquery';

//Using Custom Entities
import Button from '../Custom_entities/button';
import Image from '../Custom_entities/image';

const Head = () => {
    const self = useRef(null);
    
    useEffect(() => {
        const target = document.getElementById('banner');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: [0.1],
        }
        const observer = new IntersectionObserver(handleObserve, options);

        observer.observe(target);
    
        function handleObserve(entries) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    $(self.current).css({backgroundColor: 'rgba(3, 3, 54, 0)'});
                    $('#banner').css({opacity: '1'});
                    $('.banner > div > .main-verse > i').css({opacity: '1'});
                    $('.banner > div > .main-verse > .verse').css({marginTop: '10px'});
                } else {
                    $(self.current).css({backgroundColor: 'rgba(34, 42, 53, 25%)'});
                    // self.current.style.backgroundColor = 'rgba(34, 42, 53, 25%)';
                    $('#banner').css({opacity: '0'});
                    $('.banner > div > .main-verse > i').css({opacity: '0'});
                    $('.banner > div > .main-verse > .verse').css({marginTop: '0'})
                }
            })
        }
    }, [])
    return(<>
        <header ref={self} className="flex center-y">
            <div className="flex-100" style={{ position: 'relative', flexDirection: 'row'}}>
                <MenuBtn />
                <div className="center txt-light menu-btn-close-mobile"
                onClick={() => {
                    const content = document.querySelector('.content'); 
                    window.innerWidth <= 1000? $('.navbar').css({width: '100%', maxWidth: '380px', boxShadow: '0 0 8px 1px gray'}) : $('.navbar').css({width: '380px', boxShadow: '0 0 8px 1px gray'});
                    window.innerWidth <= 1000? content.style.left = '0' : content.style.left = '380px';
                }}>
                    SHOW
                </div>
                <div 
                className="logo-group">
                    <i style={{display: 'flex', alignItems: 'center', width: '42.5px', height: '43px', position: 'relative'}}>
                        <Image src="assets/images/mpm-logo.png" style={{maxWidth: '100%'}}/>
                    </i>
                    <i style={{display: 'flex', alignItems: 'center', width: '42px',  marginLeft: '10px', position: 'relative'}}>
                        <Image src="assets/images/rcoc_logo.png" style={{maxWidth: '100%'}}/>
                    </i>
                </div>
            </div>
            <div className="flex-100 f_direction_h_r">
                <Button type="submit" name="Join Us" style={{width: '130px', height: '35px'}} action={() => {
                    $('.contact-form-container').css({display:'flex'});
                    $('.contact-form-container').css({opacity: '1'});
                }} />
            </div>
        </header>
    </>)
}

const MenuBtn = () => {
    const [navState, switchState] = useState('close');
    useEffect(() => {
        const nav = document.querySelector('.navbar');
        const header = document.querySelector('header');
        const content = document.querySelector('.content');

        if(navState == 'close') {
            nav.style.width = '0';
            $('.navbar').css({paddingLeft: '0', width: '0', boxShadow: 'none'});
            content.style.left = '0';
        } else {
            window.innerWidth <= 1000? $('.navbar').css({width: '100%', maxWidth: '380px', boxShadow: '0 0 8px 1px gray'}) : $('.navbar').css({width: '380px', boxShadow: '0 0 8px 1px gray'});
            window.innerWidth <= 1000? content.style.left = '0' : content.style.left = '380px';
        }
    }, [navState]);

    useEffect(() => {
        if(window.innerWidth > 1000) {
            $(window).resize(() => {
                if(window.innerWidth <= 1000 && navState == 'open') {
                    switchState('close');
                } else if(window.innerWidth > 1000 && navState == 'close') {
                    switchState('open');
                }
            })
        }
    })
    return(
        <div className={navState == 'open'? "center txt-light menu-btn menu-btn-open" : 'center txt-light menu-btn menu-btn-close'}
        onClick={() => {
            if(navState == 'open') {
                switchState('close');
            } else {
                switchState('open');
            }
        }}>
           {navState == 'open'? 'HIDE' : 'SHOW'}
        </div>
    )
}

export default Head;