import React, { useState } from 'react';
//components
import Title from '../components/Title';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';

const Home = () => {
  const [results, setresults] = useState([]);
  const [usedSearch, setusedSearch] = useState(false);

  const _handleResults = results => {
    setresults(results);
    setusedSearch(true);
  }

  const _renderResults = () => {
    return (
      results.length === 0
        ? <p>Sorry! <span role="img" aria-label="sorry">😥</span> Results not found!</p>
        : <MoviesList movies={results}/>
    )
  }
  
    return ( 
        <div>
            <Title>Search Movies</Title>
            <div className="SearchForm-wrapper">
                <SearchForm onResults = {_handleResults}/>
            </div>
            {usedSearch
                ? _renderResults()
                : <small>Use the form to search a movie</small>
            }
        </div>
     );
}
 
export default Home;