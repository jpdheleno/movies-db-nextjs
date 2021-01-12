import styled from 'styled-components';

export const MovieListContainer = styled.div`
  margin-left: 3%;
  margin-right: 3%;
`;

export const MovieListTitle = styled.h1`
  &:before {
    content: '';
    border: 2px solid #efce4a;
    border-radius: 2px;
    margin-right: 10px;
  }

  margin: 100px 0 50px 0;
  white-space: nowrap;
  color: #ffffff;
`;

export const MovieListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
// Single Movie Card
export const movieContainer = styled.div`
  width: 15%;
  min-width: 175px;
  background: #141414;
  padding: 10px;

  margin: 0 5px 40px;
  /* border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px; */
  border-radius: 5px;
`;

export const movieImage = styled.img`
  width: 100%;
  transition: 0.1s ease-in all;
  border-radius: 5px;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const movieTitle = styled.div`
  margin-top: 5px;
  color: white;
  /* white-space: nowrap;     */

  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const movieRatingContainer = styled.div`
  margin-top: 5px;
  display: flex;
`;

export const movieRatingStar = styled.img`
  width: 16px;
`;

export const movieRatingNumber = styled.div`
  font-weight: bold;
  color: grey;
  margin-left: 10px;
`;

export const movieWatchListContainer = styled.div`
  color: #ffffff;
  font-weight: bold;
  background: #232323;
  margin-top: 5px;
  border-radius: 5px;
  padding: 5px 20px;
  text-align: center;

  &:hover {
    cursor: pointer;
    background: #353535;
  }
`;
