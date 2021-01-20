import React, { useState, useCallback, useEffect } from 'react';
import { Container, LinearGradientStyled, Title } from './styles';

import SettingsButton from '../../components/SettingsButton';
import Timer from '../../components/Timer';
import ModalSettings from '../../components/ModalSettings';
import ResetButton from '../../components/ResetButton';

const Home: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [minutesConcentration, setMinutesConcentration] = useState(1);
  const [
    minutesConcentrationFromSettings,
    setMinutesConcentrationFromSetting,
  ] = useState(1);
  const [minutesInterval, setMinutesInterval] = useState(5);
  const [numberTimes, setNumberTimes] = useState(4);
  const [countdownToggle, setCountdownToggle] = useState(false);

  useEffect(() => {
    setMinutesConcentration(minutesConcentrationFromSettings);
  }, [minutesConcentrationFromSettings]);

  const handleResetButton = useCallback(() => {
    if (countdownToggle) {
      return;
    }
    setMinutesConcentration(minutesConcentrationFromSettings);
  }, [minutesConcentrationFromSettings, countdownToggle]);

  const handleCountdownToggle = useCallback((state) => {
    setCountdownToggle(state);
  }, []);

  const handleVisibleModel = useCallback(() => {
    if (countdownToggle) {
      return;
    }

    setModalVisible(!modalVisible);
  }, [modalVisible, countdownToggle]);

  const handleChangeMinutesConcentrationToSettings = useCallback(
    (minutes = 0) => {
      setMinutesConcentrationFromSetting(minutes);
    },
    [],
  );

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
        <ResetButton onPressFunction={handleResetButton} />
        <SettingsButton onPressFunction={handleVisibleModel} />
        <ModalSettings
          visible={modalVisible}
          minutesConcentration={minutesConcentration}
          minutesInterval={minutesInterval}
          numberTimes={numberTimes}
          changeVisibleModalFunction={handleVisibleModel}
          changeMinutesConcentrationFunction={
            handleChangeMinutesConcentrationToSettings
          }
          changeMinutesIntervalFunction={handleChangeMinutesInterval}
          changeNumberTimesFunction={handleChangeNumberTimes}
        />
        <Timer
          minutesInterval={minutesInterval}
          minutesConcentration={minutesConcentration}
          numberTimes={numberTimes}
          changeCountdownToggleFunction={handleCountdownToggle}
          changeMinutesConcentrationFunction={handleChangeMinutesConcentration}
        />
      </LinearGradientStyled>
    </Container>
  );
};

export default Home;
