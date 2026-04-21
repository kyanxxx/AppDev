import React from 'react';
import { Image, Text, View } from 'react-native';

import { IMG } from '../utils';

const ProfileScreen = (): React.JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image source={IMG.LOGO} style={{ width: 350, height: 350 }} />
      <Text style={{ fontSize: 40 }}>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
