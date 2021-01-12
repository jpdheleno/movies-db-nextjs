import styled from 'styled-components';

interface IPropsContainer {
  backgroundImage: string;
}

export const Container = styled.header<IPropsContainer>`
  background-image: url(${p => p.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 600px;
  position: relative; // Latest Movie Title/Description
`;
export const InfoContainer = styled.div`
  max-height: 600px;
  width: 40%;
  position: absolute;
  bottom: 10%;
  left: 3%;

  @media only screen and (max-width: 1000px) {
    width: 60%;
    transition: 0.2s ease-in width;
  }
`;
export const Title = styled.div`
  color: #ffffff;
  white-space: nowrap;
  font-size: 50px;
  font-weight: bold;
  transition: 0.2s ease-in font-size;

  @media only screen and (max-width: 1000px) {
    font-size: 30px;
  }
`;
export const Description = styled.div`
  color: #ffffff;
  font-size: 20px;
  transition: 0.2s ease-in font-size;
  margin-top: 10px;

  @media only screen and (max-width: 1000px) {
    font-size: 15px;
  }
`;

export const FadeBottom = styled.div`
  /* fade into backtground color*/
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(0, 0, 0, 0.6),
    black
  );
`;
