import React from 'react';
import * as s from '../styles/components/MovieList';

import MovieCard from './MovieCard';

interface IMovie {
  id: number;
  title: string;
  description: string;
  rating: number;
  backdropPath: string;
  posterPath: string;
}

interface IProps {
  movieList: IMovie[];
}

const MovieList: React.FC<IProps> = ({ movieList }) => {
  return (
    <s.Container>
      <s.Title>Popular movies</s.Title>

      <s.Content>
        {movieList &&
          movieList.map(movie => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
      </s.Content>
    </s.Container>
  );
};

export default MovieList;
