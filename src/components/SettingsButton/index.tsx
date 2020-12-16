import React from 'react';

import { Container, LinearGradientStyled, IconStyled } from './styles';

interface ISettingsButtonProps {
  onPressFunction(): void;
}

const SettingsButton: React.FC<ISettingsButtonProps> = ({
  onPressFunction,
}) => {
  return (
    <Container onPress={onPressFunction}>
      <LinearGradientStyled>
        <IconStyled />
      </LinearGradientStyled>
    </Container>
  );
};

export default SettingsButton;
