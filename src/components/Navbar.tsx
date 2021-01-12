import React from 'react';
import * as s from '../styles/components/Navbar';

const Navbar: React.FC = () => {
  return (
    <s.Container>
      <s.LeftContainer>
        <s.Logo src="/images/navbar/clapperboard.svg" />
        <s.Title>Movies db</s.Title>
      </s.LeftContainer>
      <s.RightContainer>
        <s.LoginContainer>Join us</s.LoginContainer>
      </s.RightContainer>
    </s.Container>
  );
};

export default Navbar;
