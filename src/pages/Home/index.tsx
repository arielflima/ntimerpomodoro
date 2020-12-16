import React, { useState, useCallback } from 'react';
import { Modal, Text } from 'react-native';
import {
  Container,
  LinearGradientStyled,
  Title,
  ModalInside,
  CloseButton,
  ModalInsideLinearGradient,
  ModalInsideTitle,
  CloseButtonLinearGradient,
} from './styles';

import MuteButton from '../../components/MuteButton';
import SettingsButton from '../../components/SettingsButton';
import Timer from '../../components/Timer';

const Home: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleVisibleModel = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  return (
    <Container>
      <LinearGradientStyled>
        <MuteButton />
        <Title>Pomodoro</Title>
        <SettingsButton onPressFunction={handleVisibleModel} />
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <ModalInside>
            <ModalInsideLinearGradient>
              <ModalInsideTitle>Settings</ModalInsideTitle>
              <Text>TEST</Text>
              <CloseButton onPress={() => setModalVisible(false)}>
                <CloseButtonLinearGradient>
                  <Text>Close</Text>
                </CloseButtonLinearGradient>
              </CloseButton>
            </ModalInsideLinearGradient>
          </ModalInside>
        </Modal>
        <Timer />
      </LinearGradientStyled>
    </Container>
  );
};

export default Home;
