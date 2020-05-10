import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import ButtonBackToHome from '../components/ButtonBackToHome'


const API_KEY = '3bbaba51';
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const Detail = props => {
    const [movie, setMovie] = useState({})
    const { movieId } = props.match.params;
    const { Title, Poster, Actors, Metascore, Plot} = movie;

    useEffect(() => {
       _fetchMovie(movieId);
    }, [movieId])

    const _fetchMovie = async id => {
        const res = await fetch(`${URL}&i=${id}`);
        const data = await res.json();
        setMovie(data);
    }

    return ( 
        <div>
            <ButtonBackToHome/>
            <h1>{Title}</h1>
            <img src={Poster} alt={Title}/>
            <h3>{Actors}</h3>
            <span>{Metascore}</span>
            <p>{Plot}</p>
        </div>
     );
}
 
export default Detail;

Detail.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object,
        isExact: PropTypes.bool,
        path: PropTypes.string,
        url: PropTypes.string
    })
}