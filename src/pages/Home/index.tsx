import React from 'react';
import { Container, LinearGradientStyled, Title } from './styles';

import MuteButton from '../../components/MuteButton';
import ScheduleButton from '../../components/ScheduleButton';

const Home: React.FC = () => {
  return (
    <Container>
      <LinearGradientStyled>
        <MuteButton />
        <Title>Pomodoro</Title>
        <ScheduleButton />
      </LinearGradientStyled>
    </Container>
  );
};

export default Home;
