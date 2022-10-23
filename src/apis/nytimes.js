import axios from 'axios';

const API_KEY = 'Q9MTYm6GDcOWKfvKuJcJpgolqLXZtk3E';
const baseUrl='https://api.nytimes.com/svc/';

const news = axios.create({
    baseURL: baseUrl,
    params: {
        'api-key':API_KEY,
    },
});

export default news;