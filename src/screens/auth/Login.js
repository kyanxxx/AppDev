import { useState } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { ROUTES } from '../../utils';

const Login = () => {
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!emailAdd || !password) {
      Alert.alert(
        'Invalid Credentials',
        'Please enter valid email address and password'
      );
      return;
    }

    // Add login logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>

        <CustomTextInput
          label={'Email Address'}
          placeholder={'Enter Email Address'}
          value={emailAdd}
          onChangeText={setEmailAdd}
          containerStyle={styles.inputContainer}
          textStyle={styles.input}
        />

        <CustomTextInput
          label={'Password'}
          placeholder={'Enter Password'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          containerStyle={styles.inputContainer}
          textStyle={styles.input}
        />

        <CustomButton
          label={'LOGIN'}
          containerStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={handleLogin}
        />

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Create an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.REGISTER)}
          >
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderRadius: 10,
    color: '#000',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: '#555',
  },
  registerLink: {
    color: '#2563eb',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});