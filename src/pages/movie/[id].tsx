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
}

interface IProductionInfo {
  cast: IActor[];
}

interface IActor {
  name: string;
}

const movie: React.FC<IProps> = ({ generalInfo, productionInfo }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <h1>{generalInfo.title}</h1>
      <span>{generalInfo.description}</span>
      {productionInfo.cast.map((actor: IActor) => {
        return <p key={actor.name}>{actor.name}</p>;
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query;

  const generalInfoRes = await axios.get(`/movie/${id}`);
  const productionInfoRes = await axios.get(`/movie/${id}/credits`);

  console.log(generalInfoRes);
  console.log(productionInfoRes);

  const generalInfo: IGeneralInfo = {
    title: generalInfoRes.data.title,
    description: generalInfoRes.data.overview
  };

  const productionInfo: IProductionInfo = {
    cast: productionInfoRes.data.cast.map(({ name }) => {
      return {
        name
      } as IActor;
    })
  };
  return {
    props: { generalInfo, productionInfo }
  };
};

export default movie;
