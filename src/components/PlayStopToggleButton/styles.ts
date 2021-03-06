import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.TouchableHighlight`
  position: absolute;
  top: 600px;
  left: 165px;
  elevation: 20;
  width: 64px;
  height: 64px;
  border-radius: 21px;
`;

export const LinearGradientStyled = styled(LinearGradient).attrs(() => ({
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
