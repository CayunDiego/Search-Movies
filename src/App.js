import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
//components
import Title from './components/Title';
import SearchForm from './components/SearchForm';
import MoviesList from './components/MoviesList';
import Detail from './pages/Detail'

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
        ? <p>Sorry! <span role="img" aria-label="sorry">😥</span> Results not found!</p>
        : <MoviesList movies={results}/>
    )
  }
  
  const url = new URL(document.location);
  const hasId = url.searchParams.has('id');
  if(hasId){
    return <Detail id={url.searchParams.get('id')}/>
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
