import React, { useState, useCallback } from 'react';
import { Container, LinearGradientStyled, Title } from './styles';

import SettingsButton from '../../components/SettingsButton';
import Timer from '../../components/Timer';
import ModalSettings from '../../components/ModalSettings';

const Home: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [minutesConcentration, setMinutesConcentration] = useState(1);
  const [minutesInterval, setMinutesInterval] = useState(1);
  const [numberTimes, setNumberTimes] = useState(3);
  const [countdownToggle, setCountdownToggle] = useState(false);

  const handleCountdownToggle = useCallback((state) => {
    setCountdownToggle(state);
  }, []);

  const handleVisibleModel = useCallback(() => {
    if (countdownToggle) {
      return;
    }

    setModalVisible(!modalVisible);
  }, [modalVisible, countdownToggle]);

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
          minutesInterval={minutesInterval}
          minutesConcentration={minutesConcentration}
          numberTimes={numberTimes}
          changeCountdownToggleFunction={handleCountdownToggle}
        />
      </LinearGradientStyled>
    </Container>
  );
};

export default Home;
