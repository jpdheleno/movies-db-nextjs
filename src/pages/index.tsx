import React from 'react';
import Head from 'next/head';
import * as s from '../styles/pages/Home';
// inline
import NextLogo from '../assets/next.svg';

const Home: React.FC = () => {
  return (
    <s.Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <NextLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure</p>
    </s.Container>
  );
};

export default Home;
