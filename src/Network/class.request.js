import axios from 'axios';
import config from './config';


class Request {
    proxy = config.proxy;
    cors = config.cors;

    createUrl(path) {
        return this.cors? this.proxy + path : path;
    }

    async getReq(path) {
        try {
            const res = await axios.get(this.createUrl(path));
            const data = res.data;
            return data;
        } catch(exception) {
            return {ok: false, error: {message: exception.message, code: 404}};
        }
            
    }

    async postReq(path, payload) {
        try {
            let res = await axios.post(this.createUrl(path), payload);
            let data = res.data;
            return data;
        } catch(exception) {
            console.log(exception)
        }
    }

    async JSON_Post_req(path, payload) {
        const response = await fetch(this.createUrl(path), {
            method: 'POST',
            body: JSON.stringify(payload)
        });

        if(response.ok) return response.json();
        
    }
    // async JSON_Post_req(path, payload) {
    //     fetch(this.createUrl(path), {
    //         method: 'POST',
    //         mode: this.cors? 'cors' : 'same-origin',
    //         credentials: this.cors? 'omit' : '*same-origin',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Content-Type': 'application/json',
    //         },
    //         dody: JSON.stringify(payload)
    //     })
    //     .then(response => {
    //         if(response.ok) return response.json();
    //         throw response.error;
    //     })
    //     .catch(error => {
    //         return error;
    //     })
    // }
}

export default Request;