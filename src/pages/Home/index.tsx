import React, { useState, useCallback } from 'react';
import { Container, LinearGradientStyled, Title } from './styles';

import MuteButton from '../../components/MuteButton';
import SettingsButton from '../../components/SettingsButton';
import Timer from '../../components/Timer';
import ModalSettings from '../../components/ModalSettings';

const Home: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [minutesConcentration, setMinutesConcentration] = useState(1);
  const [minutesInterval, setMinutesInterval] = useState(5);
  const [numberTimes, setNumberTimes] = useState(3);

  const handleVisibleModel = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  const handleChangeMinutesConcentration = useCallback((minutes = 0) => {
    setMinutesConcentration(minutes);
  }, []);

  const handleChangeMinutesInterval = useCallback((minutes = 0) => {
    setMinutesInterval(minutes);
  }, []);

  const handleChangeNumberTimes = useCallback((times = 1) => {
    setNumberTimes(times);
  }, []);

  return (
    <Container>
      <LinearGradientStyled>
        <MuteButton />
        <Title>Pomodoro</Title>
        <SettingsButton onPressFunction={handleVisibleModel} />
        <ModalSettings
          visible={modalVisible}
          minutesConcentration={minutesConcentration}
          minutesInterval={minutesInterval}
          numberTimes={numberTimes}
          changeVisibleModalFunction={handleVisibleModel}
          changeMinutesConcentrationFunction={handleChangeMinutesConcentration}
          changeMinutesIntervalFunction={handleChangeMinutesInterval}
          changeNumberTimesFunction={handleChangeNumberTimes}
        />
        <Timer
          minutesConcentration={minutesConcentration}
          numberTimes={numberTimes}
        />
      </LinearGradientStyled>
    </Container>
  );
};

export default Home;
