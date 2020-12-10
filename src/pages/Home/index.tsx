import React from 'react';
import { Container, LinearGradientStyled, Title } from './styles';

import MuteButton from '../../components/MuteButton';
import ScheduleButton from '../../components/ScheduleButton';
import Timer from '../../components/Timer';

const Home: React.FC = () => {
  return (
    <Container>
      <LinearGradientStyled>
        <MuteButton />
        <Title>Pomodoro</Title>
        <ScheduleButton />
        <Timer />
      </LinearGradientStyled>
    </Container>
  );
};

export default Home;
