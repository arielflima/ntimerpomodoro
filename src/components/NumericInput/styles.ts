import styled from 'styled-components/native';

export const Container = styled.View`
  width: 70px;
  height: 40px;

  flex-direction: row;

  border: 1px solid #9299c2;

  justify-content: center;
  align-items: center;

  overflow: hidden;

  border-radius: 10px;

  left: 260px;
`;
export const ContainerNumber = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;
export const TextNumber = styled.Text`
  font-size: 18px;
  color: #9299c2;
`;
export const ContainerButtonsUpDown = styled.View`
  flex: 1;
`;
export const IncreaseDecreaseButton = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
