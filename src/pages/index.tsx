/* eslint-disable camelcase */
import React from 'react';
import Head from 'next/head';
import * as s from '../styles/pages/Home';

import axios from '../services/axios';
import requests from '../services/requests';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

// Components
import Navbar from '../components/Navbar';
import LatestMovieHeader from '../components/LatestMovieHeader';
import MovieList from '../components/MovieList';
interface IMovie {
  id: number;
  title: string;
  description: string;
  rating: number;
  backdropPath: string;
  posterPath: string;
}

const Home: React.FC = ({
  movies
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <s.Container>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />
      <LatestMovieHeader
        backgroundImage={`https://image.tmdb.org/t/p/original${movies[0]?.backdropPath}`}
        title={movies[0]?.title}
        description={movies[0]?.description}
      />
      <MovieList movies={movies} />
    </s.Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get(requests.fetchPopular, {
    params: {
      page: 1
    }
  });

  const movies: IMovie[] = res.data.results.map(
    ({ id, title, overview, vote_average, poster_path, backdrop_path }) => {
      return {
        id: id,
        title: title,
        description: overview,
        rating: vote_average,
        posterPath: poster_path,
        backdropPath: backdrop_path
      };
    }
  );

  console.log(movies);

  return {
    props: { movies }
  };
};

export default Home;
