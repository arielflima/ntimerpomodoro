import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;

  position: relative;
`;

export const LinearGradientStyled = styled(LinearGradient).attrs(() => ({
  colors: ['#464C6E', '#272B45'],
  useAngle: true,
  angle: 119.36,
  angleCenter: { x: 0.5, y: 0.5 },
}))`
  flex: 1;

  position: relative;
`;

export const Title = styled.Text`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 67px;
  font-size: 32px;
  color: #9299c2;
  font-weight: 300;
`;
