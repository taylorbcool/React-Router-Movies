import React from 'react';
import {Link} from 'react-router-dom';
import Movie from './Movie';

const MovieCard = props => {
  return(
    <Link to={`/movie/${props.id}`}>
      <Movie />
    </Link>
  );
};

export default MovieCard;
