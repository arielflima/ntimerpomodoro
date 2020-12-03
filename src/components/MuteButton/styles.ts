import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.TouchableHighlight`
  position: absolute;
  top: 63px;
  left: 22px;
  elevation: 20;
  width: 44px;
  height: 44px;
  border-radius: 22px;
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
  size: 24,
  color: '#fff',
  name: 'volume-mute-outline',
}))``;
