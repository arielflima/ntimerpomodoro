import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  position: absolute;
  top: 484px;

  flex-direction: column;

  width: 100%;
`;

export const TextStyled = styled.Text`
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
