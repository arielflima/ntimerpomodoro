import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

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
`;

export const ModalInsideTitle = styled.Text`
  font-size: 32px;
  color: #9299c2;
  font-weight: 300;

  top: 20px;
  left: 120px;
`;

export const ModalInsideGrid = styled.View`
  flex: 1;
  flex-direction: column;
  top: 50px;
`;

export const ModalInsideTextContent = styled.Text`
  font-size: 22px;
  color: #9299c2;
  font-weight: 300;

  top: 35px;
  left: 25px;
`;

export const CloseButton = styled.TouchableHighlight`
  background-color: red;
  width: 90px;
  height: 45px;

  overflow: hidden;

  top: 120px;
  left: 125px;

  border-radius: 50px;

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

export const CloseButtonText = styled.Text`
  color: #9299c2;
  font-size: 16px;
`;
