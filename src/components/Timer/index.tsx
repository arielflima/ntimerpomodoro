import React from 'react';
import {
  Container,
  LinearGradientStyled,
  CircleAnimated,
  LinearGradientStyledChildrenBorder,
  LinearGradientStyledChildren,
  TextStyled,
  TextStyledInside,
} from './styles';

const Timer: React.FC = () => {
  return (
    <Container>
      <LinearGradientStyled>
        <CircleAnimated>
          <LinearGradientStyledChildrenBorder>
            <LinearGradientStyledChildren>
              <TextStyled>19</TextStyled>
              <TextStyledInside>minutes</TextStyledInside>
            </LinearGradientStyledChildren>
          </LinearGradientStyledChildrenBorder>
        </CircleAnimated>
      </LinearGradientStyled>
    </Container>
  );
};

export default Timer;
