import React from 'react';

import { Container, LinearGradientStyled, IconStyled } from './styles';

const RoundButton: React.FC = () => {
  return (
    <Container>
      <LinearGradientStyled>
        <IconStyled />
      </LinearGradientStyled>
    </Container>
  );
};

export default RoundButton;
