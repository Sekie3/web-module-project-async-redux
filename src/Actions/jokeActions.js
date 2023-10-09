import axios from 'axios';

export const FETCH_JOKE_START = 'FETCH_JOKE_START';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAIL = 'FETCH_JOKE_FAIL';

export const fetchJoke = () => dispatch => {
    dispatch({ type: FETCH_JOKE_START });
    
    axios.get('https://official-joke-api.appspot.com/random_joke')
.then(res => {
    console.log('API Response:', res.data);
    dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data });
})
.catch(err => {
    console.error('API Error:', err);
    dispatch({ type: FETCH_JOKE_FAIL, payload: err });
});
    
};
