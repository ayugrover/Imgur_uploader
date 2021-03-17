import axios from 'axios';

export default axios.create({
    baseURL: ' https://api.imgur.com/oauth2/authorize',
    headers:
    {
        Authorization: 
             'Client-ID 3b08ab0539e7abd'
    },
});