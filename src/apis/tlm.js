import axios from 'axios';

const baseUrl = 'https://the-lazy-media-api.vercel.app/api';

const news = axios.create({
    baseURL: baseUrl
});

export default news;