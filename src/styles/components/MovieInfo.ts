import styled from 'styled-components';

interface IPropsContainer {
  backgroundImage: string;
}

export const Container = styled.header<IPropsContainer>`
  background-image: url(${p => p.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const InfoContainer = styled.div`
  padding: 5vh 20vw 0 20vw;
  height: calc(100vh - 90px);
  overflow-y: scroll;
`;

export const GeneralInfoContainer = styled.div`
  display: flex;
  height: 50vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const GeneralInfoImage = styled.img`
  object-fit: contain;
  height: 100%;
`;

export const GeneralInfoTextContainer = styled.div`
  position: relative;
`;

export const GeneralInfoTextTitle = styled.div`
  color: #efce4a;
  font-size: 35px;
  font-weight: bold;
  padding: 30px;
`;

export const GeneralInfoTextTagLine = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-left: 30px;
`;

export const GeneralInfoTextDescription = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  font-size: 18px;
`;
export const GeneralInfoGenresContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 75px;
  margin-left: 30px;
`;

export const GeneralInfoGenre = styled.div`
  border-radius: 5px;
  background: #efce4a;
  margin-left: 10px;
  padding: 5px;
  color: black;
`;

export const GeneralInfoFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.6);
  color: lightgrey;
`;

export const ProductionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 25px;
`;

export const ProductionInfoActorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ProductionInfoTitle = styled.div`
  color: darkgray;
  font-size: 30px;
`;

export const ProductionInfoActorCard = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background: lightgray;
  margin: 20px 0px;
`;

export const ProductionInfoActorImage = styled.img`
  object-fit: contain;
  height: 28vh;
`;
export const ProductionInfoActorName = styled.div`
  padding: 5px;
  margin: 10px;
  text-align: center;
`;
