import '../Stylesheets/Banner.css'
import Image from "../Custom_entities/image";

const Banner = () => {
    return(
        <div id="banner" className="flex center banner" style={{backgroundImage: 'url(/assets/images/banner-bg.jpg'}}>
            <i style={{display: 'flex', width: '600px', position: 'absolute', top: 0, right: 0, opacity: '0.08', zIndex: '9'}}> 
                <Image src="assets/images/mpm-logo.png" style={{maxWidth: '600px', }} />
            </i>         
            <div className="flex-100 h_fit f_direction_v">
                <div className="flex-100 h_fit" style={{flexWrap: 'wrap', marginBottom: '50px'}}>
                    {/* <div style={{display: 'inline-block',position: 'relative', maxWidth: '35%', minWidth: '300px', zIndex: '10'}}>
                        <Image src="assets/images/mpm-roxas-banner.png" style={{maxWidth: '100%', minWidth: '200px'}} />
                    </div> */}
                    <div className="flex-100 center-y f_direction_h_r" style={{zIndex: '10'}}>
                        {/* <i style={{position: 'relative', width: '80px', marginLeft: '15px'}}> 
                            <Image src="assets/images/mpm-logo.png" style={{maxWidth: '100%'}} />
                        </i> */}
                        {/* <i style={{position: 'relative', width: '80px', marginLeft: '15px'}}>
                            <Image src="assets/images/rcoc_logo.png" style={{maxWidth: '100%'}}/>
                        </i>       */}
                    </div>
                </div>
                <div className="flex center-x main-verse">
                    <i style={{position: 'relative', maxWidth: '400px', minWidth: '300px', marginLeft: '15px'}}> 
                        <Image src="assets/images/the-mission-is-still-the-same.png" style={{maxWidth: '100%'}} />
                    </i>
                    {/* <p className="verse-text">Go therefore and make disciples of all the nations, baptizing them in the name of the Father and the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age.</p> */}
                    <p className="verse">Matthew 28:19-20</p>
                </div>
            </div>
        </div>
    )
}

export default Banner;