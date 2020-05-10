import React from 'react';
import PropTypes from 'prop-types';


const Movie = props => {
    const { poster, title, year } = props;
    return ( 
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={poster} alt={title}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{year}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Movie;


Movie.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
}