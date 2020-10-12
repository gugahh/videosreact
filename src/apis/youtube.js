import axios from 'axios';

const KEY = 'AIzaSyDxvwFmvhvQSzeQ4uUrfci1G0f12x6TT0U';

export default axios.create(
    {
        baseURL: "https://www.googleapis.com/youtube/v3",
        params: 
        { 
            key: KEY,
            part: 'snippet',
            type: 'video',
            maxResults: 5
        }
    }
);