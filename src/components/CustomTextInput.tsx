import React from 'react';
import { StyleProp, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native';

type Props = {
  label?: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
};

const CustomTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  textStyle,
  containerStyle,
  secureTextEntry,
}: Props): React.JSX.Element => {
  return (
    <View style={containerStyle}>
      {label ? <Text style={{ fontWeight: 'bold' }}>{label}</Text> : null}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[
          textStyle,
          {
            width: '100%',
            borderBottomWidth: 1,
          },
        ]}
      />
    </View>
  );
};

export default CustomTextInput;
