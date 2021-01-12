import React from 'react';

import { Container, LinearGradientStyled, IconStyled } from './styles';

interface IResetButtonProps {
  onPressFunction(): void;
}

const ResetButton: React.FC<IResetButtonProps> = ({ onPressFunction }) => {
  return (
    <Container onPress={onPressFunction}>
      <LinearGradientStyled>
        <IconStyled />
      </LinearGradientStyled>
    </Container>
  );
};

export default ResetButton;
