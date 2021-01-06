import React from 'react';
import { Modal } from 'react-native';

import {
  ModalInside,
  CloseButton,
  ModalInsideLinearGradient,
  ModalInsideTitle,
  ModalInsideGrid,
  ModalInsideTextContent,
  CloseButtonLinearGradient,
  CloseButtonText,
} from './styles';

import NumericInput from '../NumericInput';

interface IModalSettingsProps {
  changeVisibleModalFunction(): void;
  changeMinutesConcentrationFunction(): void;
  changeMinutesIntervalFunction(): void;
  changeNumberTimesFunction(): void;
  visible: boolean;
  minutesConcentration: number;
  minutesInterval: number;
  numberTimes: number;
}

const ModalSettings: React.FC<IModalSettingsProps> = ({
  changeVisibleModalFunction,
  changeMinutesConcentrationFunction,
  changeMinutesIntervalFunction,
  changeNumberTimesFunction,
  visible,
  minutesConcentration,
  minutesInterval,
  numberTimes,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={changeVisibleModalFunction}>
      <ModalInside>
        <ModalInsideLinearGradient>
          <ModalInsideTitle>Settings</ModalInsideTitle>
          <ModalInsideGrid>
            <ModalInsideTextContent>Concentration Time:</ModalInsideTextContent>
            <NumericInput
              changeFunction={changeMinutesConcentrationFunction}
              number={minutesConcentration}
            />
            <ModalInsideTextContent>Interval Time:</ModalInsideTextContent>
            <NumericInput
              changeFunction={changeMinutesIntervalFunction}
              number={minutesInterval}
            />
            <ModalInsideTextContent>Intervals:</ModalInsideTextContent>
            <NumericInput
              changeFunction={changeNumberTimesFunction}
              number={numberTimes}
            />
            <CloseButton onPress={changeVisibleModalFunction}>
              <CloseButtonLinearGradient>
                <CloseButtonText>Close</CloseButtonText>
              </CloseButtonLinearGradient>
            </CloseButton>
          </ModalInsideGrid>
        </ModalInsideLinearGradient>
      </ModalInside>
    </Modal>
  );
};

export default ModalSettings;
