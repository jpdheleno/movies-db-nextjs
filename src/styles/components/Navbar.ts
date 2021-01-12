import styled from 'styled-components';

// navbar
export const Container = styled.div`
  background: #141414;
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// navbar left part
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const Logo = styled.img`
  object-fit: contain;
  width: 50px;

  &:hover {
    cursor: pointer;
  }
`;
export const Title = styled.span`
  color: white;
  font-size: 40px;
  white-space: nowrap;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
  }
`;
// navbar right part
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const LoginContainer = styled.div`
  color: white;
  font-size: 20px;
  background: #232323;
  padding: 5px 15px;
  border-radius: 5px;
  white-space: nowrap;
  transition: 0.15s ease-in background;

  &:hover {
    background: #353535;
    cursor: pointer;
  }
`;
