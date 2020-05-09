import React, { useState } from 'react';

const API_KEY = '3bbaba51';
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;


const SearchForm = props => {
    const [ inputMovie , setInputMovie ] = useState('');

    const _handleChange = e => {
        setInputMovie(e.target.value);
    }

    const _handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch(`${URL}&s=${inputMovie}`);
        const data = await res.json();
        const {Search, totalResults } = data;
        console.log({Search, totalResults });
        props.onResults(Search);
    }

    return ( 
        <form onSubmit={_handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input 
                        className="input"
                        onChange={_handleChange}
                        type="text"
                        placeholder="Movie to search..."/>
                </div>
                <div className="control">
                    <button className="button is-info">
                        Search
                    </button>
                </div>
            </div>
        </form>
     );
}
 
export default SearchForm;