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

export const ModalInside = styled.View`
  width: 350px;
  height: 500px;
  background-color: #fff;
  elevation: 5;

  align-items: center;
  justify-content: center;

  border-radius: 55px;

  overflow: hidden;

  align-self: center;
  position: absolute;
  top: 150px;
`;

export const ModalInsideLinearGradient = styled(LinearGradient).attrs(() => ({
  colors: ['#494F74', '#3A3F5E'],
  useAngle: true,
  angle: 116.82,
  angleCenter: { x: 0.5, y: 0.5 },
}))`
  flex: 1;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const ModalInsideTitle = styled.Text`
  font-size: 26px;
  color: red;
`;

export const CloseButton = styled.TouchableHighlight`
  background-color: red;
  width: 80px;
  height: 40px;

  top: 50px;

  overflow: hidden;

  border-radius: 55px;

  elevation: 4;
`;

export const CloseButtonLinearGradient = styled(LinearGradient).attrs(() => ({
  colors: ['#424869', '#4A5178'],
  useAngle: true,
  angle: 135,
}))`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;
