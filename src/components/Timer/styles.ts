import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

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

export const ContainerPomodoro = styled.View`
  position: absolute;
  top: 314px;

  flex-direction: column;

  width: 100%;
`;

export const TextStyledPomodoro = styled.Text`
  text-align: center;
  color: #9299c2;
  font-size: 26px;
`;

export const DotsBar = styled.View`
  margin-top: 16px;
  width: 100%;
  height: 12px;

  align-items: center;
  justify-content: center;

  flex-direction: row;
`;

export const Dot = styled(LinearGradient).attrs(() => ({
  colors: ['#612FF5', '#855CFF'],
  useAngle: true,
  angle: 135,
}))`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 22px;

  width: 12px;
  height: 12px;

  elevation: 10;

  margin-left: 10px;
`;

export const ContainerPlayStopToggleButton = styled.TouchableHighlight`
  position: absolute;
  top: 430px;
  left: 115px;
  elevation: 20;
  width: 64px;
  height: 64px;
  border-radius: 21px;
`;

export const LinearGradientStyledPlayStopToggleButton = styled(
  LinearGradient,
).attrs(() => ({
  colors: ['#424869', '#4A5178'],
  useAngle: true,
  angle: 135,
}))`
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
  border-radius: 22px;
`;

export const IconStyled = styled(Icon).attrs(() => ({
  size: 36,
  color: '#9299c2',
  name: 'play-outline',
}))``;
