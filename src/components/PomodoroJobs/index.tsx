import React from 'react';

import { Container, TextStyled, DotsBar, Dot } from './styles';

const PomodoroJobs: React.FC = () => {
  return (
    <Container>
      <TextStyled>Work</TextStyled>
      <DotsBar>
        <Dot />
        <Dot />
        <Dot />
      </DotsBar>
    </Container>
  );
};

export default PomodoroJobs;
