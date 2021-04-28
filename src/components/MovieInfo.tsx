import React from 'react';
import * as s from '../styles/components/MovieInfo';

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

const MovieInfo: React.FC<IProps> = ({ generalInfo, productionInfo }) => {
  return (
    <s.Container
      backgroundImage={`https://image.tmdb.org/t/p/original${generalInfo?.backdropPath}`}
    >
      <s.InfoContainer>
        <s.GeneralInfoContainer>
          <s.GeneralInfoImage
            src={`https://image.tmdb.org/t/p/original${generalInfo.posterPath}`}
          />
          {/* <img
            src={`https://image.tmdb.org/t/p/original${generalInfo.posterPath}`}
            style={{ height: '100px', objectFit: 'contain' }}
          /> */}
          <s.GeneralInfoTextContainer>
            <s.GeneralInfoTextTitle>{generalInfo.title}</s.GeneralInfoTextTitle>
            <s.GeneralInfoTextTagLine>
              {generalInfo.tagline}
            </s.GeneralInfoTextTagLine>
            <s.GeneralInfoTextDescription>
              {generalInfo.description}
            </s.GeneralInfoTextDescription>

            <s.GeneralInfoGenresContainer>
              Genres:
              {generalInfo.genres.map((genre: IGenres) => {
                return (
                  <s.GeneralInfoGenre key={genre.id}>
                    {genre.name}
                  </s.GeneralInfoGenre>
                );
              })}
            </s.GeneralInfoGenresContainer>

            <s.GeneralInfoFooter>
              <p>Release Date: {generalInfo.releaseDate}</p>
              <p>Duration: {generalInfo.runtime} minutes</p>
              <p>Budget: {generalInfo.budget} $</p>
            </s.GeneralInfoFooter>
          </s.GeneralInfoTextContainer>
        </s.GeneralInfoContainer>

        <s.ProductionInfoContainer>
          <s.ProductionInfoTitle>Actors </s.ProductionInfoTitle>
          <s.ProductionInfoActorsContainer>
            {productionInfo.cast.map((actor: IActor) => {
              return (
                <s.ProductionInfoActorCard key={actor.name}>
                  <s.ProductionInfoActorImage
                    src={`https://image.tmdb.org/t/p/original${actor.profilePath}`}
                  />
                  <s.ProductionInfoActorName>
                    {actor.name}
                  </s.ProductionInfoActorName>
                </s.ProductionInfoActorCard>
              );
            })}
          </s.ProductionInfoActorsContainer>
        </s.ProductionInfoContainer>
      </s.InfoContainer>
    </s.Container>
  );
};

export default MovieInfo;
