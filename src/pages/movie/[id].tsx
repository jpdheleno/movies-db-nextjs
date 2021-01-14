/* eslint-disable camelcase */
import React from 'react';
import Head from 'next/head';
import axios from '../../services/axios';

import { GetServerSideProps } from 'next';

// Components
import Navbar from '../../components/Navbar';

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
  // budget, revenue, runtime, release_date, genres [id, name], vote_average, tagline
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

      <h1>{generalInfo.title}</h1>
      <h2>{generalInfo.tagline}</h2>
      <p>{generalInfo.description}</p>
      <p>Budget: {generalInfo.budget} $</p>
      <p>Revenue: {generalInfo.revenue} $</p>
      <p>Duration: {generalInfo.runtime} minutes</p>
      <p>Actors: </p>
      {productionInfo.cast.map((actor: IActor) => {
        return (
          <>
            <p key={actor.name}>{actor.name}</p>
            <img
              src={`https://image.tmdb.org/t/p/original${actor.profilePath}`}
              style={{ height: '100px', objectFit: 'contain' }}
            />
          </>
        );
      })}
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
    tagline: generalInfoRes.data.tagline
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
