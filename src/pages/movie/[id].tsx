/* eslint-disable camelcase */
import React from 'react';
import Head from 'next/head';
import axios from '../../services/axios';

import { GetServerSideProps } from 'next';

// Components
import Navbar from '../../components/Navbar';
import MovieInfo from '../../components/MovieInfo';

interface IProps {
  generalInfo: IGeneralInfo;
  productionInfo: IProductionInfo;
}

interface IGeneralInfo {
  title: string;
  description: string;
  budget: number;
  revenue: number;
  runtime: number;
  tagline: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  genres: IGenres[];

  // budget, revenue, runtime, release_date, genres [id, name], vote_average, tagline
}

interface IGenres {
  id: number;
  name: string;
}

interface IProductionInfo {
  cast: IActor[];
}

interface IActor {
  name: string;
  profilePath: string;
}

const movie: React.FC<IProps> = ({ generalInfo, productionInfo }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <MovieInfo generalInfo={generalInfo} productionInfo={productionInfo} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query;

  // TO-DO: Create a response type
  const generalInfoRes: any = await axios.get(`/movie/${id}`);
  const productionInfoRes: any = await axios.get(`/movie/${id}/credits`);

  console.log(generalInfoRes);
  console.log(productionInfoRes);

  const generalInfo: IGeneralInfo = {
    title: generalInfoRes.data.title,
    description: generalInfoRes.data.overview,
    budget: generalInfoRes.data.budget,
    revenue: generalInfoRes.data.revenue,
    runtime: generalInfoRes.data.runtime,
    tagline: generalInfoRes.data.tagline,
    posterPath: generalInfoRes.data.poster_path,
    backdropPath: generalInfoRes.data.backdrop_path,
    releaseDate: generalInfoRes.data.release_date,
    genres: generalInfoRes.data.genres
  };

  const productionInfo: IProductionInfo = {
    cast: productionInfoRes.data.cast.map(({ name, profile_path }) => {
      return {
        name,
        profilePath: profile_path
      } as IActor;
    })
  };
  return {
    props: { generalInfo, productionInfo }
  };
};

export default movie;
