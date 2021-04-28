import Link from 'next/link';
import React from 'react';
import * as s from '../styles/components/MovieCard';

interface IMovie {
  id: number;
  title: string;
  description: string;
  rating: number;
  backdropPath: string;
  posterPath: string;
}

interface IProps {
  movie: IMovie;
}

const MovieCard: React.FC<IProps> = ({ movie }) => {
  return (
    <s.Container>
      <Link href={`/movie/${movie.id}`}>
        <s.Image
          src={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
        />
      </Link>
      <Link href={`/movie/${movie.id}`}>
        <s.Title>{movie?.title}</s.Title>
      </Link>
      <s.RatingContainer>
        <s.RatingStar src="/images/movieCard/star.svg" />
        <s.RatingNumber>{movie.rating}</s.RatingNumber>
      </s.RatingContainer>
      <s.WatchListContainer>+ Watchlist</s.WatchListContainer>
    </s.Container>
  );
};

export default MovieCard;
