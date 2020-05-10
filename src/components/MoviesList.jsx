import React from 'react';
import PropTypes from 'prop-types';

//components
import Movie from './Movie';

const MoviesList = props => {
    const { movies } = props;
    return (
        <div className="MovieList">
            {
                movies.map( movie => {
                    return (
                        <div key={movie.imdbID} className="MoviesList-item">
                            <Movie 
                               title={movie.Title}
                               year={movie.Year}
                               poster={movie.Poster}/>
                        </div>
                    )
                })
            }
        </div>
    );
}
 
export default MoviesList;

MoviesList.propTypes = {
    movies: PropTypes.array
}