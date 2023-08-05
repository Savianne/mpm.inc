import { useEffect, useRef, useState } from 'react';
import '../Stylesheets/Join_us.css';
import $ from 'jquery';

//Using Custom Entities
import Button from '../Custom_entities/button';
import {Input, TextArea} from '../Custom_entities/input';

//Utils
import oneDayExpDay from '../Controllers/oneday_exp_date_formatter';

//Network Request
import ApiRequest from '../Network/class.request';

const makeRequest = new ApiRequest();

const JoinUs = () => {
    const onloading_elem = useRef(null);
    const self = useRef(null);
    const [formState, changeState] = useState('init');
    const full_name = useRef({value: '', state: 'init', required: true});
    const email = useRef({value: '', state: 'init', required: true});
    // const contact = useRef({value: '', state: 'init', required: true});
   
    useEffect(() => {
        if(formState == 'sending' || formState == 'retry') {
             makeRequest.JSON_Post_req('/membership-request.php', {
                 "full_name": full_name.current.value.trim(),
                 "email": email.current.value.trim(), 
                 "request_id": Date.now(),
                 "exp_date": oneDayExpDay()
             })
             .then(data => {
                 if(data.ok) {
                     full_name.current = {value: '', state: 'init', required: true};
                     email.current = {value: '', state: 'init', required: true};
                     changeState('sent');
                 } else {
                     throw data;
                 }                           
             })
             .catch(error => {
                 changeState('onerror');
             })
        }
 
        // if(formState == 'sent') {   
        // //  $(onloading_elem.current).fadeOut(1000);
        //     $(self.current).css({opacity: '0'});
        //     $(self.current).css({display: 'none'});
        // }
     }, [formState])
 
    return(
        <div className="contact-form-container" ref={self}>
            <form className="contact-form"
            onSubmit={(e) => {
                e.preventDefault();
            }}>
                <span className="close-form-toggle" onClick={() => {
                    $(self.current).css({opacity: '0'});
                    $(self.current).css({display: 'none'});
                }}>
                    <i className="fas fa-times"></i>
                </span>
                <h1>Join Us</h1>
                <span className="input-holder">
                    <Input placeholder="Full Name" type="text" limitations={{min_len: 10, max_len: 30}} initialization={formState == 'init'? full_name.current : full_name.current} dispatcher={(data) => full_name.current = data}/>
                </span>
                <span className="input-holder">
                    <Input placeholder="Your Email" type="email" limitations={{input_type: 'EMAIL'}} initialization={formState == 'init'? email.current : email.current} dispatcher={(data) => email.current = data}/>
                </span>
                {/* <h1 style={{textAlign: 'center'}}>or</h1>
                <span className="input-holder">
                    <Input placeholder="Contact Number" type="number" initialization={formState == 'init'? contact.current : contact.current}/>
                </span> */}
                <Button type="submit" name="Send" style={{width: '100px', height: '35px', fontSize: '1em', alignSelf: 'flex-end'}} 
                action={() => {
                    if(email.current.state == 'success' && 
                    full_name.current.state == 'success') {
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
        </div>
    )
}

export default JoinUs;