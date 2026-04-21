import { useState, useEffect } from 'react';
import { Image, Alert, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { IMG, ROUTES } from '../../utils';
import { authLogin } from '../../app/actions';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
    if (auth.isError) {
        Alert.alert(
            'Invalid Credentials',
            auth.error || 'Incorrect username or password'
        );

        // clear error after showing alert
        dispatch({ type: 'AUTH_CLEAR_ERROR' });
    }
}, [auth.isError]);

    return (
        <View
        style={{
            flex: 1,
            backgroundColor: '#F8FAFC',
            padding: 25,
            justifyContent: 'center',
        }}
        >

        {/* Logo */}
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

        {/* Form Card */}
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
                label={'Username'}
                placeholder={'Enter Username'}
                value={username}
                onChangeText={val => setUsername(val)}
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
                label={'Password'}
                placeholder={'Enter Password'}
                value={password}
                onChangeText={val => setPassword(val)}
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
                label={'LOGIN'}
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
                        Alert.alert(
                        'Invalid Credentials',
                        'Please enter valid username and password',
                        );
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

        {/* Register */}
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 25,
            }}
        >
            <Text style={{ color: '#555' }}>
                Create an account?
            </Text>

            <TouchableOpacity
                onPress={() => navigation.navigate(ROUTES.REGISTER)}
            >
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