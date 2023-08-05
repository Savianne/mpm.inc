import React, {useState, useEffect, useRef} from 'react';
import $ from 'jquery';
import './Stylesheets/App.css';
import './Stylesheets/all.css';

//Network Request
import Request from './Network/class.request';

//Using Custom Entities
import Image from './Custom_entities/image';
import Button from './Custom_entities/button';

//Components
import Navbar from "./Components/Navbar";
import Banner from './Components/Banner';
import Head from './Components/Head';
import JoinUs from './Components/Join_us';
import ContactPage from './Components/ContactPage';

//Using WebSocket
// const W3CWebSocket = require('websocket').w3cwebsocket;

function App() {

  return(<>
  <div className="main-container center">
    <JoinUs />
    <div className="flex maxW-4k-2000 minW-m-s-320 middle-container">
      <Navbar />
      <div className="flex f_direction_v content">
        <Head />
        <Banner />
        <div className="flex flex-100-r f_direction_v center about-content-section">
          {/* OUR BEGINNING */}
          <SectionContent target="beginning" bg="/assets/images/mpm-nav-bg.jpg">
            <div className="flex center flex-100-r title" style={{backgroundImage: 'url(/assets/images/our-beginning.jpg'}}>
              <div className="flex flex-100-r cover-effect"></div>
              <h1 className="flex center">OUR BEGINNING</h1>
            </div>
            <div className="flex center-x txt-content">
              <p className="maxW-1k">The Macedonian Personal Ministry, Inc (MPM) was originally conceptualized by Pastor Ferdinand S. Florez of the Church of Christ at Roxas, Isabela in 2018. Although, it took a whole year of planning, promotion, and collaboration. It was formally launched in June 2019. Some of the Churches of Christ pastors who also spearheaded the MPM launching were Pastor Art Santiago of Las Pinas, Pastor Ephraim Sison of Balic-Balic, Pastor Vher Palang of Project 7, and many others. MPM was registered with the Security Exchange Commission on November 26, 2019. Today, there are hundreds of leaders and church members of the Churches of Christ in the Philippines and abroad who have already joined and committed to this personal ministry.</p>
            </div>
          </SectionContent>
          {/* OUR MISSION */}
          <SectionContent target="mission" bg="">
            <div className="flex center flex-100-r title" style={{backgroundImage: 'url(/assets/images/our-mission.jpg'}}>
              <div className="flex flex-100-r cover-effect"></div>
              <h1 className="flex center">OUR MISSION</h1>
            </div>
            <div className="flex flex-100-r center-x txt-content">
              <p className="maxW-1k">Macedonian Personal Ministry (MPM) is a faith-based and non-profit organization within the Churches of Christ and Christian Churches whose main goal is to fulfill the Great Commission stated in Matthew 28:19-20. MPM also wants to fulfill Jesus Christ’s commands for believers to serve one another in love.</p>
            </div>
            <div className="flex f_direction_v center-y bg-dark bible-verse">
              <p className="verse-text maxW-1k">" If you love me, keep my commands.  Whoever has my commands and keeps them is the one who loves me. The one who loves me will be loved by my Father, and I too will love them and show myself to them. "</p>
              <p className="flex flex-100-r maxW-1k verse">-John 14:15 & 21 (NIV)</p>
            </div>
          </SectionContent>
          {/* OUR METHOD */}
          <SectionContent target="method">
            <div className="flex center flex-100-r title" style={{backgroundImage: 'url(/assets/images/our-method.jpg'}}>
              <div className="flex flex-100-r cover-effect"></div>
              <h1 className="flex center">OUR METHOD</h1>
            </div>
            <div className="flex center-x txt-content">
              <p className="maxW-1k">In conjunction with local churches,  MPM leaders travel around the country to visit churches that seek assistance through the training provided by MPM’s faithful, dedicated and hardworking pastors and leaders. Seminars and workshops are held to introduce and share MPM’s vision to obey Jesus Christ’s command to spread the Gospel as well as teaching believers to desire continued spiritual growth and maturity hence be propagators of the Gospel, too.</p>
            </div>
          </SectionContent>
          {/* OUR COMMITMENT */}
          <SectionContent target="commitment">
            <div className="flex center flex-100-r title" style={{backgroundImage: 'url(/assets/images/commitment.jpg'}}>
              <div className="flex flex-100-r cover-effect"></div>
              <h1 className="flex center">OUR COMMITMENT</h1>
            </div>
            <div className="flex f_direction_v center-y txt-content">
              <h1 className="flex flex-100-r maxW-1k">To our Lord and Savior Jesus Christ</h1>
              <CommitmentContent>
                <i style={{flex: '1', position: 'relative', maxWidth: '80%', minWidth: '300px', marginBottom: '15px'}}><Image src="/assets/images/bible.jpg" style={{maxWidth: '100%'}}/></i>
                <p className="">-by obeying His commandment faithfully!</p>
              </CommitmentContent>
            </div>
            <div className="flex f_direction_v center-y bg-dark bible-verse">
              <p className="flex flex-100-r verse-text maxW-1k">" He said to them, “Go into all the world and preach the gospel to all creation. "</p>
              <p className="flex flex-100-r maxW-1k verse">-Mark 16:15</p>
            </div>
            <div className="flex f_direction_v center-y txt-content">
              <h1 className="flex flex-100-r maxW-1k">To the local churches</h1>
              <CommitmentContent>
                <i style={{flex: '1', position: 'relative', maxWidth: '80%', minWidth: '300px', marginBottom: '15px'}}><Image src="/assets/images/rcocbg.jpg" style={{maxWidth: '100%'}}/></i>
                <p className="">-by giving financial assistance in building new churches edifice, renovations, beautification projects, etc.</p>
              </CommitmentContent>
            </div>
            <div className="flex f_direction_v center-y bg-dark bible-verse">
              <p className="verse-text maxW-1k">" This is what the Lord Almighty says: “These people say, ‘The time has not yet come to rebuild the Lord’s house.’” Then the word of the Lord came through the prophet Haggai: 4 “Is it a time for you yourselves to be living in your paneled houses, while this house remains a ruin?” This is what the Lord Almighty says: “Give careful thought to your ways. 8 Go up into the mountains and bring down timber and build my house, so that I may take pleasure in it and be honored,” says the Lord. "</p>
              <p className="flex flex-100-r maxW-1k verse">-Haggai 1:2-4, 7 & 8 (NIV)</p>
            </div>
            <div className="flex f_direction_v center-y txt-content">
              <h1 className="flex flex-100-r maxW-1k">To our members</h1>
              <CommitmentContent>
                <i style={{flex: '1', position: 'relative', maxWidth: '80%', minWidth: '300px', marginBottom: '15px'}}><Image src="/assets/images/bible.jpg" style={{maxWidth: '100%'}}/></i>
                <p className="">-by giving financial aid during hardships caused by serious illness, death in the family, legal assistance, calamities triggered by natural disasters, the most recent of which was the covid-19 pandemic.</p>
              </CommitmentContent>
            </div>
            <div className="flex f_direction_v center-y bg-dark bible-verse">
              <p className="verse-text maxW-1k">" If anyone has material possessions and sees a brother or sister in need but has no pity on them, how can the love of God be in that person? Dear children, let us not love with words or speech but with actions and in truth. "</p>
              <p className="flex flex-100-r maxW-1k verse">1 John 3:17-18 (NIV)</p>
            </div>
          </SectionContent>
          <SectionContent target="leaders">
            <div className="flex center flex-100-r maxW-1k founders-box">
              <h1>Leaders</h1>
              <FounderInfoBox name="Apple Jane L. De Guzman" img="/assets/images/apple.jpg" role="Founder" />
              <FounderInfoBox name="Danielle Macabitas" img="/assets/images/den.jpg" role="Co-founder" />
              <FounderInfoBox name="Danica S. Esteban" img="/assets/images/danica.jpg" role="Co-founder" />
              <FounderInfoBox name="Joylyn Obina" img="/assets/images/joylyn.jpg" role="Co-founder" />
              <FounderInfoBox name="Abegail Atchoco Liban" img="/assets/images/aby.jpg" role="Co-founder" />
            </div>
          </SectionContent>
          <SectionContent target="contact-us">
            <ContactPage />
          </SectionContent>
          <div className="fb-like" data-href="http://localhost:3000" data-width="" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>
          <footer className="flex flex-100-r f_direction_v center">© Macedonian Personal Ministry, Inc.</footer>
        </div>
      </div>
    </div>
  </div>
  </>)
}

const SectionContent = ({children, target, title}) => {
  const self = useRef(null);
  useEffect(() => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.1, 0.2, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }
    
    const observer = new IntersectionObserver(handleObserve, options);

    observer.observe(self.current);

    function handleObserve(entries) {
      entries.forEach(entry => {
        // console.log(entry)
        if(entry.isIntersecting) {
          if(entry.boundingClientRect.height >= entry.rootBounds.height && entry.boundingClientRect.bottom >= entry.rootBounds.height) {
            $(`.nav-item`).css({borderColor: 'gray', color: 'gray'});
            $(`.nav-item[target=${target}`).css({borderColor: 'rgb(0, 176, 240)', color: 'rgb(0, 176, 240)'});
          } else if(entry.boundingClientRect.top >= -50) {
            if(entry.boundingClientRect.top <= entry.rootBounds.height / 2) {
              $(`.nav-item`).css({borderColor: 'gray', color: 'gray'});
              $(`.nav-item[target=${target}`).css({borderColor: 'rgb(0, 176, 240)', color: 'rgb(0, 176, 240)'});
              // console.log(`${target} is now Active`)
            } 
          } 

          $(self.current).children('.title').css({
            opacity: '1',
            width: '100%'
            // marginRight: '0',
          });

          $(self.current).children('.title').children('h1').css({
            fontSize: '1.2rem',
          });

          $(self.current).children('.title').children('.cover-effect').css({
            opacity: '1',
          });
        } else {
          // console.log(`${target} is now Close`)
          $(self.current).children('.title').css({
            opacity: '0',
            width: '0'
            // marginRight: '100%',
          });

          $(self.current).children('.title').children('h1').css({
            fontSize: '10px',
          });

          $(self.current).children('.title').children('.cover-effect').css({
            opacity: '0',
          });

        }
      })
    }

}, [])
  return(
    <>
    <div className="flex flex-100-r center-y f_direction_v section-item" target={target} ref={self}>
      {
        children
      }        
    </div>
    </>
  )
}


const CommitmentContent = ({children}) => {
  const self = useRef(null);
  useEffect(() => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0,
    }
    const observer = new IntersectionObserver(handleObserve, options);

    observer.observe(self.current);

    function handleObserve(entries) {
      entries.forEach(entry => {
          if(entry.isIntersecting) {
              $(self.current).children('i').css({opacity: '1'});
          } else {
            $(self.current).children('i').css({opacity: '0'})
          }
        })
    }
}, [])
  return (
    <div ref={self} className="flex flex-100-r maxW-1k ">
    {
      children
    }
    </div>
  )
}

const FounderInfoBox = ({name, img, role}) => {
  return(
    <>
    <div className="flex f_direction_v center founder-info-box">
      <i className="avatar"><Image src={img} style={{width: '90px', height: '90px', borderRadius: '50%'}}/></i>
      <p className="founder">{name}</p>
      <p className="role">{role}</p>
    </div>
    </>
  )
}

function isReady(inputs = null) {
  if(!inputs) return;
  const result = inputs.map(item => {
    if(item.required) {
      return (item.state == 'success')? true : false;
    } else {
      if(!(item.value == '')) {
        return (item.state == 'success')? true : false;
      } else return true
    }
  });

  return result.includes(false)? false : true;
}

export default App;
