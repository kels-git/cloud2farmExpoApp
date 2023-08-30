import React, {useCallback, useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {COLORS} from '../../constants/colors';
import {RootStackScreenProps} from '../../typings/navigation';
import {SCREENS} from '../../constants/screens';
import ContainerWrapper from '../../components/wrappers/ContainerWrapper';
import GenesyssApp from '../../components/GenesyssApp/Geneyss';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

const IndexWelcomeUserAccount = ({
  navigation,
}: RootStackScreenProps<SCREENS.WELCOME_SCREEN>) => {
  const tailwind = useTailwind();
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate(SCREENS.LOGIN_USER);
      }, 2000);
    }, []),
  );

  return (
    <ContainerWrapper
      style={[tailwind('flex-1'), {backgroundColor: COLORS.BG_COLOR}]}>
      <View style={[tailwind('flex-1'), StyleSheet.absoluteFillObject]}>
        <GenesyssApp />
        {loading && (
          <View
            style={[
              tailwind('flex-1'),
              StyleSheet.absoluteFillObject,
              tailwind('justify-center items-center'),
            ]}>
            <ActivityIndicator size="large" color={COLORS.WHITE} />
          </View>
        )}
      </View>
    </ContainerWrapper>
  );
};

export default IndexWelcomeUserAccount;
