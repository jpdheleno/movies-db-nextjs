import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 3%;
  margin-right: 3%;
`;

export const Title = styled.h1`
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

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
