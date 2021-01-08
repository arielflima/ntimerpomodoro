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

interface ITimerProps {
  minutesInterval: number;
  minutesConcentration: number;
  numberTimes: number;
  changeCountdownToggleFunction(state: boolean): void;
}

const Timer: React.FC<ITimerProps> = ({
  minutesInterval = 5,
  minutesConcentration = 25,
  numberTimes = 1,
  changeCountdownToggleFunction,
}) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [countdownToggle, setCountdownToggle] = useState(false);
  const intervalId = useRef(null);
  const [barForDots, setBarForDots] = useState([]);
  const [isInterval, setIsInterval] = useState(false);

  useEffect(() => {
    setMinutes(minutesConcentration);

    const dotsToBar = [];
    let i = 0;

    while (i < numberTimes) {
      dotsToBar.push(<Dot key={i} />);
      i++;
    }

    setBarForDots(dotsToBar);
  }, [minutesConcentration, numberTimes]);

  const handleStart = useCallback(
    (
      secondsPlay: number = seconds,
      minutesPlay: number = minutes,
      isIntervalInside: boolean = isInterval,
      countdownToggleInside: boolean = false,
    ) => {
      setCountdownToggle(true);
      countdownToggleInside = true;
      changeCountdownToggleFunction(true);

      const intervalofinterval = setInterval(() => {
        if (isIntervalInside && !secondsPlay && !minutesPlay) {
          setCountdownToggle(false);
          countdownToggleInside = false;
          changeCountdownToggleFunction(false);
          setIsInterval(false);
          isIntervalInside = false;
          secondsPlay = 0;
          setSeconds(secondsPlay);
          minutesPlay = minutesConcentration;
          setMinutes(minutesPlay);
          clearInterval(intervalofinterval);
        }

        if (!isIntervalInside && !secondsPlay && !minutesPlay) {
          setCountdownToggle(false);
          countdownToggleInside = false;
          changeCountdownToggleFunction(false);
          setIsInterval(true);
          isIntervalInside = true;
          secondsPlay = 0;
          setSeconds(secondsPlay);
          minutesPlay = minutesInterval;
          setMinutes(minutesPlay);
          clearInterval(intervalofinterval);
        }
        if (secondsPlay || (minutesPlay && countdownToggleInside)) {
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
    [
      minutes,
      seconds,
      intervalId,
      changeCountdownToggleFunction,
      minutesInterval,
      minutesConcentration,
    ],
  );

  const handleStop = useCallback(() => {
    clearInterval(intervalId.current);
    setCountdownToggle(false);
    changeCountdownToggleFunction(false);
  }, [changeCountdownToggleFunction]);

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
        <DotsBar>{barForDots}</DotsBar>
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
