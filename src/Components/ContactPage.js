import '../Stylesheets/all.css';
import '../Stylesheets/ContactPage.css';
import $ from 'jquery';


//Using Custom Entities
import Button from '../Custom_entities/button';
import Image from '../Custom_entities/image';
import {Input, TextArea} from '../Custom_entities/input';
import { useState, useEffect, useRef } from 'react';

//Utils
import oneDayExpDay from '../Controllers/oneday_exp_date_formatter';

//Network Request
import ApiRequest from '../Network/class.request';

const makeRequest = new ApiRequest();

const ContactPage = () => {
    const onloading_elem = useRef(null);

    const [formState, changeState] = useState('init');
    const full_name = useRef({value: '', state: 'init', required: true});
    const email = useRef({value: '', state: 'init', required: true});
    const subject = useRef({value: '', state: 'init', required: true});
    const query = useRef({value: '', state: 'init', required: true});

    useEffect(() => {
       if(formState == 'sending' || formState == 'retry') {
            makeRequest.JSON_Post_req('/query.php', {
                "full_name": full_name.current.value.trim(),
                "email": email.current.value.trim(), 
                "subject": subject.current.value.trim(),
                "query": query.current.value.trim(),
                "thread_id": Date.now(),
                "exp_date": oneDayExpDay()
            })
            .then(data => {
                if(data.ok) {
                    full_name.current = {value: '', state: 'init', required: true};
                    email.current = {value: '', state: 'init', required: true};
                    subject.current = {value: '', state: 'init', required: true};
                    query.current = {value: '', state: 'init', required: true};
                    changeState('sent');
                } else {
                    throw data;
                }                           
            })
            .catch(error => {
                changeState('onerror');
            })
       }

    //    if(formState == 'sent') {     
    //     $(onloading_elem.current).fadeOut(1000);
    //    }
    }, [formState])

    return(<>
    <div className="flex center flex-100-r maxW-1k contact-page">
        <h1>Contact Us</h1>
        <div className="contact-page-form-container">
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <h1>Ask Me Your Queries</h1>
                <span className="input-holder">
                    <Input initialization={formState == 'init'? full_name.current : full_name.current} placeholder="Your Full Name" type="text" limitations={{min_len: 10, max_len: 30}} dispatcher={(data) => full_name.current = data} />
                </span>
                <span className="input-holder">
                    <Input initialization={formState == 'init'? email.current : email.current} placeholder="Your Email" type="email" limitations={{input_type: 'EMAIL'}} dispatcher={(data) => email.current = data} />
                </span>
                <span className="input-holder">
                    <Input initialization={formState == 'init'? subject.current : subject.current} placeholder="Subject" type="text" limitations={{min_len: 10, max_len: 100}} dispatcher={(data) => subject.current = data} />
                </span>
                <span className="textarea-holder">
                    <TextArea initialization={formState == 'init'? query.current : query.current} placeholder="Query" type="text" limitations={{min_len: 10, max_len: 500}} dispatcher={(data) => query.current = data} />
                </span>

                <Button type="submit" name="Send" style={{width: '100px', height: '35px', fontSize: '1em', alignSelf: 'flex-end'}} action={() => {
                    if(email.current.state == 'success' && 
                    full_name.current.state == 'success' && 
                    subject.current.state == 'success' && 
                    query.current.state == 'success') {
                        changeState('sending');                    
                    } 
                }}/>
            </form>
            {
                !(formState == 'init'|| formState == 'canceled')? <>
                <div className="onloading" ref={onloading_elem}>
                    <div className="spinner-box">
                        {
                            formState == 'sending' || formState == 'retry'?<>
                                <i className="fas fa-spinner fa-spin icn-spinner"></i>
                                <p>Sending...</p>
                            </> : ''
                        }
                        {
                            formState =='sent'? <>
                                <i className="fas fa-paper-plane icn-spinner"></i>
                                <p>Sent!</p>
                                <button onClick={() => changeState('init')}>Ok</button>
                            </> : ''
                        }
                        {
                            formState == 'onerror'? <>
                                <i className="fas fa-exclamation-circle icn-spinner error"></i>
                                <p className="error">An error occured!</p>
                                <button onClick={() => changeState('retry')}>Retry</button>
                                <button onClick={() => changeState('canceled')}>Cancel</button>
                            </> : ''
                        }
                    </div>
                </div></>: ''
            }
            {/* <div className="onloading">
                <div className="spinner-box">
                    <i className="fas fa-spinner fa-spin icn-spinner"></i>
                    <p>Sending...</p>
                    <i className="fas fa-paper-plane icn-spinner"></i>
                    <p>Sent!</p>
                    <i className="fas fa-exclamation-circle icn-spinner error"></i>
                    <p className="error">An error occured!</p>
                    <button>Retry</button>
                </div>
            </div> */}
            <div className="google-map-container">
                <h1>or Visit Us</h1>
                <div className="google-map" id="map">
                    {/* <Image src="assets/images/google-map-sample.jpeg" style={{maxWidth: '100%', minWidth: '200px'}} /> */}
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default ContactPage;