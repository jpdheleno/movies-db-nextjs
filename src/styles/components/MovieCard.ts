import styled from 'styled-components';

export const Container = styled.div`
  width: 15%;
  min-width: 175px;
  background: #141414;
  padding: 10px;

  margin: 0 5px 40px;
  /* border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px; */
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 100%;
  transition: 0.1s ease-in all;
  border-radius: 5px;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const Title = styled.div`
  margin-top: 5px;
  color: white;
  /* white-space: nowrap;     */

  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const RatingContainer = styled.div`
  margin-top: 5px;
  display: flex;
`;

export const RatingStar = styled.img`
  width: 16px;
`;

export const RatingNumber = styled.div`
  font-weight: bold;
  color: grey;
  margin-left: 10px;
`;

export const WatchListContainer = styled.div`
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
