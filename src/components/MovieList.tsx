import React from 'react';
import * as s from '../styles/components/MovieList';

interface IMovie {
  id: number;
  title: string;
  description: string;
  rating: number;
  backdropPath: string;
  posterPath: string;
}

interface IProps {
  movies: IMovie[];
}

const MovieList: React.FC<IProps> = ({ movies }) => {
  return (
    <s.MovieListContainer>
      <s.MovieListTitle>Popular movies</s.MovieListTitle>

      <s.MovieListContent>
        {movies &&
          movies.map(movie => {
            return (
              <s.movieContainer key={movie.id}>
                <s.movieImage
                  src={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
                />
                <s.movieTitle>{movie?.title}</s.movieTitle>
                <s.movieRatingContainer>
                  <s.movieRatingStar src="images/movieCard/star.svg" />
                  <s.movieRatingNumber>{movie.rating}</s.movieRatingNumber>
                </s.movieRatingContainer>
                <s.movieWatchListContainer>
                  + Watchlist
                </s.movieWatchListContainer>
              </s.movieContainer>
            );
          })}
      </s.MovieListContent>
    </s.MovieListContainer>
  );
};

export default MovieList;
