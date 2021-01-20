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
  DotVoid,
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
  changeMinutesConcentrationFunction(minutes: number): void;
}

const Timer: React.FC<ITimerProps> = ({
  minutesInterval = 5,
  minutesConcentration = 5,
  numberTimes = 4,
  changeCountdownToggleFunction,
  changeMinutesConcentrationFunction,
}) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [countdownToggle, setCountdownToggle] = useState(false);
  const intervalId = useRef(null);
  const [barForDots, setBarForDots] = useState([]);
  const [isInterval, setIsInterval] = useState(false);
  const [countWork, setCountWork] = useState(1);

  useEffect(() => {
    if (!countdownToggle && minutes !== minutesConcentration) {
      setSeconds(0);
    }
  }, [minutes, countdownToggle, minutesConcentration]);

  useEffect(() => {
    !isInterval
      ? setMinutes(minutesConcentration)
      : setMinutes(minutesInterval);

    const dotsToBar = [];
    let i = 0;
    let t = 0;

    while (i < numberTimes) {
      while (t < countWork) {
        dotsToBar.push(<Dot isInterval={isInterval} key={`${t}Full`} />);
        t++;
        numberTimes--;
      }

      if (numberTimes) {
        dotsToBar.push(<DotVoid key={`${i}Void`} />);
      }

      i++;
    }

    setBarForDots(dotsToBar);
  }, [
    minutesConcentration,
    numberTimes,
    countWork,
    isInterval,
    minutesInterval,
  ]);

  const handleStart = useCallback(
    (
      secondsPlay: number = seconds,
      minutesPlay: number = minutes,
      isIntervalInside: boolean = isInterval,
      countdownToggleInside: boolean = countdownToggle,
      countWorkInside: number = countWork,
    ) => {
      setCountdownToggle(true);
      countdownToggleInside = true;
      changeCountdownToggleFunction(true);

      const intervalofinterval = setInterval(() => {
        if (
          countdownToggleInside &&
          isIntervalInside &&
          !secondsPlay &&
          !minutesPlay
        ) {
          setCountdownToggle(false);
          countdownToggleInside = false;
          changeCountdownToggleFunction(false);
          setIsInterval(false);
          isIntervalInside = false;
          countWorkInside++;
          setCountWork(countWorkInside);
          secondsPlay = 0;
          setSeconds(secondsPlay);
          minutesPlay = minutesConcentration;
          setMinutes(minutesPlay);
          changeMinutesConcentrationFunction(minutesPlay);
          clearInterval(intervalofinterval);
        }

        if (
          countdownToggleInside &&
          !isIntervalInside &&
          !secondsPlay &&
          !minutesPlay
        ) {
          setCountdownToggle(false);
          countdownToggleInside = false;
          changeCountdownToggleFunction(false);
          setIsInterval(true);
          isIntervalInside = true;
          secondsPlay = 0;
          setSeconds(secondsPlay);
          minutesPlay = minutesInterval;
          setMinutes(minutesPlay);
          changeMinutesConcentrationFunction(minutesPlay);
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
            changeMinutesConcentrationFunction(minutesPlay);
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
      isInterval,
      countdownToggle,
      countWork,
      changeMinutesConcentrationFunction,
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
          <LinearGradientStyledChildrenBorder isInterval={isInterval}>
            <LinearGradientStyledChildren>
              <TextStyled>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </TextStyled>
            </LinearGradientStyledChildren>
          </LinearGradientStyledChildrenBorder>
        </CircleAnimated>
      </LinearGradientStyled>
      <ContainerPomodoro>
        <TextStyledPomodoro>
          {!isInterval ? 'Work' : 'Break'}
        </TextStyledPomodoro>
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
    </Container>
  );
};

export default Timer;
