import React, { useState } from 'react';
import Title from './components/Title'
import SearchForm from './components/SearchForm'
import './App.css';
import 'bulma/css/bulma.css'

function App() {
  const [results, setresults] = useState([]);

  const _handleResults = results => {
    setresults(results);
  }

  const _renderResults = () => {
    return results.map( movie => {
               return <p key={movie.imdbID}>{movie.Title}</p>
           });
  }
  
  return (
    <div className="App">
      <Title>Search Movies</Title>
      <div className="SearchForm-wrapper">
        <SearchForm onResults = {_handleResults}/>
      </div>
      {results.length === 0
        ? <p>Sin resultados</p>
        : _renderResults()
      }
    </div>
  );
}

export default App;
