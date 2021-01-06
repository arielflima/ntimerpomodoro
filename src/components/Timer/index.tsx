import React, { useState, useCallback, useRef, useEffect } from 'react';
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
import { setConstantValue } from 'typescript';

interface ITimerProps {
  minutesConcentration: number;
}

const Timer: React.FC<ITimerProps> = ({ minutesConcentration = 0 }) => {
  const [seconds, setSeconds] = useState(5);
  const [minutes, setMinutes] = useState(0);
  const [countdownToggle, setCountdownToggle] = useState(false);
  const intervalId = useRef(null);

  useEffect(() => {
    setMinutes(minutesConcentration);
  }, [minutesConcentration]);

  const handleStart = useCallback(
    (secondsPlay: number = seconds, minutesPlay: number = minutes) => {
      setCountdownToggle(true);

      const intervalofinterval = setInterval(() => {
        if (!secondsPlay && !minutesPlay) {
          setCountdownToggle(false);
          clearInterval(intervalofinterval);
        }
        if (secondsPlay || minutesPlay) {
          secondsPlay--;
          setSeconds(secondsPlay);
          if (secondsPlay < 0 && minutesPlay) {
            secondsPlay = 59;
            setSeconds(secondsPlay);
            minutesPlay--;
            setMinutes(minutesPlay);
          }
        }
      }, 1000);

      intervalId.current = intervalofinterval;
    },
    [minutes, seconds, intervalId],
  );

  const handleStop = useCallback(() => {
    clearInterval(intervalId.current);
    setCountdownToggle(false);
  }, []);

  const handleToggleButton = useCallback(() => {
    if (!minutes && !seconds) {
      return;
    }

    if (!countdownToggle) {
      handleStart();
    } else {
      handleStop();
    }
  }, [minutes, seconds, countdownToggle, handleStart, handleStop]);

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
      <ContainerPlayStopToggleButton onPress={handleToggleButton}>
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
