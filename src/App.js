import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
//components
import Title from './components/Title';
import SearchForm from './components/SearchForm';
import MoviesList from './components/MoviesList';

function App() {
  const [results, setresults] = useState([]);
  const [usedSearch, setusedSearch] = useState(false);
/*
  useEffect(()=> {

  },[results]);
*/
  const _handleResults = results => {
    setresults(results);
    setusedSearch(true);
  }

  const _renderResults = () => {
    return (
      results.length === 0
        ? <p>Sorry! Results not found!</p>
        : <MoviesList movies={results}/>
    )
  }
  
  return (
    <div className="App">
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

export default App;
