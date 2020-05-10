import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

const API_KEY = '3bbaba51';
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const Detail = props => {
    const [movie, setMovie] = useState({})
    const { id } = props;
    const { Title, Poster, Actors, Metascore, Plot} = movie;

    useEffect(() => {
       _fetchMovie(id);
    }, [id])

    const _fetchMovie = async id => {
        const res = await fetch(`${URL}&i=${id}`);
        const data = await res.json();
        setMovie(data);
    }

    const _goBack = e => {
        window.history.back();
    }

    return ( 
        <div>
            <button onClick={_goBack}>Volver</button>
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
    id: PropTypes.string
}