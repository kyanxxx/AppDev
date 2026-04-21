import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { authClearError, authLogin } from '../../app/actions';
import { RootState } from '../../app/types';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { IMG, ROUTES } from '../../utils';

const Login = (): React.JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (auth.isError) {
      Alert.alert('Invalid Credentials', auth.error || 'Incorrect username or password');
      dispatch(authClearError());
    }
  }, [auth.isError, auth.error, dispatch]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F8FAFC',
        padding: 25,
        justifyContent: 'center',
      }}
    >
      <Image
        source={IMG.LOGO}
        style={{
          width: 240,
          height: 200,
          alignSelf: 'center',
          marginBottom: 30,
        }}
        resizeMode="contain"
      />

      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          padding: 20,
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <CustomTextInput
          label="Username"
          placeholder="Enter Username"
          value={username}
          onChangeText={setUsername}
          containerStyle={{
            marginBottom: 15,
          }}
          textStyle={{
            borderRadius: 10,
            color: '#000',
            marginLeft: 10,
            fontWeight: '500',
          }}
        />

        <CustomTextInput
          label="Password"
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          containerStyle={{
            marginBottom: 10,
          }}
          textStyle={{
            borderRadius: 10,
            color: '#000',
            marginLeft: 10,
            fontWeight: '500',
          }}
        />

        <CustomButton
          label="LOGIN"
          containerStyle={{
            backgroundColor: '#1E3A8A',
            borderRadius: 10,
            marginTop: 10,
            paddingVertical: 14,
          }}
          textStyle={{
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: 1,
          }}
          onPress={() => {
            if (username === '' || password === '') {
              Alert.alert('Invalid Credentials', 'Please enter valid username and password');
              return;
            }

            dispatch(
              authLogin({
                username,
                password,
              }),
            );
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 25,
        }}
      >
        <Text style={{ color: '#555' }}>Create an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
          <Text
            style={{
              color: '#2563EB',
              marginLeft: 6,
              fontWeight: 'bold',
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
