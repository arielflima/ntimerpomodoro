import React, { useState, useCallback } from 'react';
import {
  Container,
  LinearGradientStyled,
  CircleAnimated,
  LinearGradientStyledChildrenBorder,
  LinearGradientStyledChildren,
  TextStyled,
  ContainerPomodoro,
  TextStyledPomodoro,
  DotsBar,
  Dot,
  ContainerPlayStopToggleButton,
  LinearGradientStyledPlayStopToggleButton,
  IconStyled,
} from './styles';

import PlayStopToggleButton from '../PlayStopToggleButton';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(1);

  const handlePlay = useCallback((secondsPlay, minutesPlay) => {
    const intervalTimer = setInterval(() => {
      secondsPlay--;
      setSeconds(secondsPlay);

      if (secondsPlay === 0) {
        if (minutesPlay === 0) {
          clearInterval(intervalTimer);
        } else {
          minutesPlay--;
          secondsPlay = 59;
          setSeconds(secondsPlay);
          setMinutes(minutesPlay);
        }
      }
    }, 1000);
  }, []);

  return (
    <Container>
      <LinearGradientStyled>
        <CircleAnimated>
          <LinearGradientStyledChildrenBorder>
            <LinearGradientStyledChildren>
              <TextStyled>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </TextStyled>
            </LinearGradientStyledChildren>
          </LinearGradientStyledChildrenBorder>
        </CircleAnimated>
      </LinearGradientStyled>
      <ContainerPomodoro>
        <TextStyledPomodoro>Work</TextStyledPomodoro>
        <DotsBar>
          <Dot />
          <Dot />
          <Dot />
        </DotsBar>
      </ContainerPomodoro>
      <ContainerPlayStopToggleButton
        onPress={() => handlePlay(seconds, minutes)}>
        <LinearGradientStyledPlayStopToggleButton>
          <IconStyled />
        </LinearGradientStyledPlayStopToggleButton>
      </ContainerPlayStopToggleButton>
      <PlayStopToggleButton />
    </Container>
  );
};

export default Timer;
