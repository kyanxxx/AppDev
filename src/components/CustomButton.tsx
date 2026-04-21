import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  label: string;
  onPress: () => void;
};

const CustomButton = ({ containerStyle, textStyle, label, onPress }: Props): React.JSX.Element => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}
        >
          <Text style={textStyle}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
