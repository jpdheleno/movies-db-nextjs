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
  movieList: IMovie[];
}

const MovieList: React.FC<IProps> = ({ movieList }) => {
  return (
    <s.Container>
      <s.Title>Popular movies</s.Title>

      <s.Content>
        {movieList &&
          movieList.map(movie => {
            return (
              <s.MovieContainer key={movie.id}>
                <s.MovieImage
                  src={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
                />
                <s.MovieTitle>{movie?.title}</s.MovieTitle>
                <s.MovieRatingContainer>
                  <s.MovieRatingStar src="/images/movieCard/star.svg" />
                  <s.MovieRatingNumber>{movie.rating}</s.MovieRatingNumber>
                </s.MovieRatingContainer>
                <s.MovieWatchListContainer>
                  + Watchlist
                </s.MovieWatchListContainer>
              </s.MovieContainer>
            );
          })}
      </s.Content>
    </s.Container>
  );
};

export default MovieList;
