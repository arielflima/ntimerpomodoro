import React from 'react';

import {
  Container,
  ContainerNumber,
  TextNumber,
  ContainerButtonsUpDown,
  IncreaseDecreaseButton,
} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

interface INumericInputProps {
  changeFunction(number): void;
  number: number;
}

const NumericInput: React.FC<INumericInputProps> = ({
  number,
  changeFunction,
}) => {
  return (
    <Container>
      <ContainerNumber>
        <TextNumber>{number}</TextNumber>
      </ContainerNumber>
      <ContainerButtonsUpDown>
        <IncreaseDecreaseButton
          onPress={() => {
            if (number > 0) {
              changeFunction(number + 1);
            } else {
              return;
            }
          }}>
          <Icon name="chevron-up-outline" color="#9299c2" />
        </IncreaseDecreaseButton>
        <IncreaseDecreaseButton
          onPress={() => {
            if (number > 1) {
              changeFunction(number - 1);
            } else {
              return;
            }
          }}>
          <Icon name="chevron-down-outline" color="#9299c2" />
        </IncreaseDecreaseButton>
      </ContainerButtonsUpDown>
    </Container>
  );
};

export default NumericInput;
