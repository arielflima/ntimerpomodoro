import React, { useState, useCallback, useRef } from 'react';
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
  const [seconds, setSeconds] = useState(3);
  const [minutes, setMinutes] = useState(1);
  const [countdownToggle, setCountdownToggle] = useState(false);
  const intervalId = useRef(null);

  const handleStart = useCallback(
    (secondsPlay: number = seconds, minutesPlay: number = minutes) => {
      setCountdownToggle(!countdownToggle);

      const intervalofinterval = setInterval(() => {
        if (secondsPlay || minutesPlay) {
          secondsPlay--;
          setSeconds(secondsPlay);
        }

        if (secondsPlay < 0 && minutesPlay) {
          secondsPlay = 59;
          setSeconds(secondsPlay);
          minutesPlay--;
          setMinutes(minutesPlay);
        }

        if (!secondsPlay && !minutesPlay) {
          clearInterval(intervalofinterval);
        }
      }, 1000);

      intervalId.current = intervalofinterval;
    },
    [minutes, seconds, countdownToggle, intervalId],
  );

  const handleStop = useCallback(() => {
    clearInterval(intervalId.current);
    setCountdownToggle(!countdownToggle);
  }, [countdownToggle]);

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
        onPress={() => (!countdownToggle ? handleStart() : handleStop())}>
        <LinearGradientStyledPlayStopToggleButton>
          {!countdownToggle ? (
            <IconStyled name="play-outline" />
          ) : (
            <IconStyled name="pause-outline" />
          )}
        </LinearGradientStyledPlayStopToggleButton>
      </ContainerPlayStopToggleButton>

      <PlayStopToggleButton />
    </Container>
  );
};

export default Timer;
