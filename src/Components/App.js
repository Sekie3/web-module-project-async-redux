import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from '../Actions/jokeActions';
import '../App.css';

function App() {
    const dispatch = useDispatch();
    const { joke, isFetching, error } = useSelector((state) => state);
   

    useEffect(() => {
        dispatch(fetchJoke());
    }, [dispatch]);

    return (
        <div className="App">
          {console.log(joke)}
            <h1>Random Joke:</h1>
            {isFetching && <p>Loading...</p>}
            {joke && !isFetching && <p>Setup: {joke.setup}</p>}
            {<p>Punchline: {joke.punchline}</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
}

export default App;
