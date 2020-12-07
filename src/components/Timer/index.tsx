import React, { useState, useCallback } from 'react';
import {
  Container,
  LinearGradientStyled,
  CircleAnimated,
  LinearGradientStyledChildrenBorder,
  LinearGradientStyledChildren,
  TextStyled,
  TextStyledInside,
} from './styles';

interface ITimerProps {
  minutes: number;
  seconds: number;
}

const Timer: React.FC<ITimerProps> = ({ minutes = 0, seconds = 0 }) => {
  return (
    <Container>
      <LinearGradientStyled>
        <CircleAnimated>
          <LinearGradientStyledChildrenBorder>
            <LinearGradientStyledChildren>
              <TextStyled>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </TextStyled>
              {/* <TextStyledInside>minutes</TextStyledInside> */}
            </LinearGradientStyledChildren>
          </LinearGradientStyledChildrenBorder>
        </CircleAnimated>
      </LinearGradientStyled>
    </Container>
  );
};

export default Timer;
