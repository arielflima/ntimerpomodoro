import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  position: absolute;

  width: 280px;
  height: 280px;

  left: 55px;
  top: 172px;
`;

export const LinearGradientStyled = styled(LinearGradient).attrs(() => ({
  colors: ['#494F74', '#3A3F5E'],
  useAngle: true,
  angle: 116.82,
  angleCenter: { x: 0.5, y: 0.5 },
}))`
  display: flex;
  flex: 1;
  border-radius: 200px;

  align-items: center;
  justify-content: center;
  elevation: 20;
`;

export const CircleAnimated = styled.TouchableHighlight`
  width: 188px;
  height: 188px;
  border-radius: 200px;
`;

export const LinearGradientStyledChildrenBorder = styled(LinearGradient).attrs(
  () => ({
    colors: ['#612ff5', '#855CFF'],
    useAngle: true,
    angle: 116.82,
    angleCenter: { x: 0.5, y: 0.5 },
  }),
)`
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: center;

  flex-direction: column;
  border-radius: 200px;
`;

export const LinearGradientStyledChildren = styled(LinearGradient).attrs(
  () => ({
    colors: ['#424869', '#4A5178'],
    useAngle: true,
    angle: 116.82,
    angleCenter: { x: 0.5, y: 0.5 },
  }),
)`
  display: flex;

  width: 94%;
  height: 94%;

  align-items: center;
  justify-content: center;

  flex-direction: column;
  border-radius: 100px;
`;

export const TextStyled = styled.Text`
  font-size: 48px;
  text-align: center;
  color: #9299c2;
`;

export const TextStyledInside = styled.Text`
  font-size: 24px;
  color: #9299c2;
`;
