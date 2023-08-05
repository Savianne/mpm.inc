import {useState, useEffect} from 'react';
import { useRef } from 'react';
import './css/input.css';

// Using Custom Entities
import ErrTooltip from './error_tooltip';

// Using Input Checker
import InputChecker from '../Controllers/class.input_checker';

const Input = ({type = 'text', placeholder = '', limitations = {}, initialization = {state: 'init', value: '', required: false}, dispatcher = (data) => data}) => {
    const inputChecker = new InputChecker(limitations); 

    const [inputState, changeState] = useState(initialization);
    const [tooltip, showToltip] = useState(false);
    const [value, inputValue] = useState(initialization.value);
    const [validatedValue, updateValue] = useState('');
    
    useEffect(() => {
        dispatcher(inputState);
    }, [inputState])

    useEffect(() => {
        changeState(initialization);
    }, [initialization]);
    
    return (
        <div className={inputState.state == 'disabled'? 'input-disabled' : 'input'}>
            <input
            state={inputState.state} 
            type={type} 
            placeholder={placeholder}
            value={inputState.value}
            disabled={inputState.state == 'disabled'? true : false}
            onChange={(self) => {
                inputChecker.run(self.target.value)
                .then((data) => {
                    changeState({...inputState, value: data, state: 'success', error: null});
                })
                .catch((exception) => {
                    changeState({...inputState, value: exception.input, state: 'onerror', error: exception.error});
                    showToltip(true);
                });
            }}
            onFocus={() => {
                showToltip(true);
            }}
            onBlur={() => {
                showToltip(false);
            }}
            required={initialization.required}></input>
            {inputState.state == 'onerror' ? <ErrTooltip text={inputState.error} state={tooltip} /> : ''}
            {inputState.state == 'onerror' && !(type == 'password')? <i className="fas fa-exclamation-circle icn-error"></i> : ''}
            {inputState.state == 'success' && !(type == 'password')? <i className="fas fa-check-circle icn-success"></i> : ''}
        </div>
    )
}


const TextArea = ({type = 'text', placeholder = '', limitations = {}, initialization = {state: 'init', value: '', required: false}, focus = false, dispatcher = (data) => data}) => {
    const inputChecker = new InputChecker(limitations); 

    const [inputState, changeState] = useState(initialization);
    const [tooltip, showToltip] = useState(false);
    const [value, inputValue] = useState(initialization.value);
    const [validatedValue, updateValue] = useState('');
    
    const self = useRef(null);
    useEffect(() => {
        dispatcher(inputState);
    }, [inputState]);

    useEffect(() => {
        if(focus) self.current.focus();
    }, [focus])

    useEffect(() => {
        changeState(initialization);
    }, [initialization])
    return (
        <div className={inputState.state == 'disabled'? 'input-disabled' : 'input'}>
            <textarea
            state={inputState.state} 
            type={type} 
            placeholder={placeholder}
            value={inputState.value}
            disabled={inputState.state == 'disabled'? true : false}
            onChange={(self) => {
                inputChecker.run(self.target.value)
                .then((data) => {
                    changeState({...inputState, value: data, state: 'success', error: null});
                })
                .catch((exception) => {
                    changeState({...inputState, value: exception.input, state: 'onerror', error: exception.error});
                    showToltip(true);
                });
            }}
            onFocus={() => {
                showToltip(true);
            }}
            onBlur={() => {
                showToltip(false);
            }}
            required={initialization.required}
            ref={self}></textarea>
            {inputState.state == 'onerror' ? <ErrTooltip text={inputState.error} state={tooltip} /> : ''}
            {inputState.state == 'onerror' && !(type == 'password')? <i className="fas fa-exclamation-circle icn-error"></i> : ''}
            {inputState.state == 'success' && !(type == 'password')? <i className="fas fa-check-circle icn-success"></i> : ''}
            {
                limitations.max_len? <p className="input-limit-count">{inputState.value.length} / {limitations.max_len}</p> : ''
            }
        </div>
    )
}

export {Input, TextArea};