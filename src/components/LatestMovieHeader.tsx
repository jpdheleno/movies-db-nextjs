import React from 'react';
import * as s from '../styles/components/LatestMovieHeader';

interface IProps {
  backgroundImage: string;
  title: string;
  description: string;
}

const LatestMovieHeader: React.FC<IProps> = ({
  backgroundImage,
  description,
  title
}) => {
  return (
    <s.Container backgroundImage={backgroundImage}>
      <s.InfoContainer>
        <s.Title>{title}</s.Title>
        <s.Description>{description} </s.Description>
      </s.InfoContainer>
      <s.FadeBottom />
    </s.Container>
  );
};

export default LatestMovieHeader;
