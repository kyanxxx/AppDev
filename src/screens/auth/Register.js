import React, { useState } from 'react';
import { 
  Alert, 
  Text, 
  TouchableOpacity, 
  View, 
  ScrollView,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { ROUTES } from '../../utils';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const handleRegister = () => {
    if (fullName === '' || emailAdd === '' || password === '' || confirmPassword === '') {
      Alert.alert(
        'Invalid Credentials',
        'Please fill in all fields',
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        'Password Mismatch',
        'Password and confirm password do not match',
      );
      return;
    }

    // Add your registration logic here
    Alert.alert('Success', 'Registration successful!');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: '#f5f5f5' }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            flex: 1,
            padding: 25,
            justifyContent: 'center',
          }}
        >
          {/* Header */}
          <View style={{ marginBottom: 30 }}>
            <Text style={{ 
              fontSize: 28, 
              fontWeight: 'bold', 
              color: '#333',
              textAlign: 'center',
              marginBottom: 5
            }}>
              Create Account
            </Text>
            <Text style={{ 
              fontSize: 14, 
              color: '#666',
              textAlign: 'center'
            }}>
              Sign up to get started
            </Text>
          </View>

          {/* Form Fields */}
          <View style={{ width: '100%' }}>
            {/* Full Name Field */}
            <View style={{ marginBottom: 15 }}>
              <Text style={{ 
                fontSize: 14, 
                fontWeight: '600', 
                color: '#555',
                marginBottom: 5,
                marginLeft: 5
              }}>
                Full Name
              </Text>
              <CustomTextInput
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
                containerStyle={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  elevation: 2,
                  padding: 0,
                }}
                textStyle={{
                  padding: 12,
                  borderRadius: 8,
                  color: '#333',
                  fontSize: 14,
                }}
              />
            </View>
            
            {/* Email Field */}
            <View style={{ marginBottom: 15 }}>
              <Text style={{ 
                fontSize: 14, 
                fontWeight: '600', 
                color: '#555',
                marginBottom: 5,
                marginLeft: 5
              }}>
                Email Address
              </Text>
              <CustomTextInput
                placeholder={'Enter your email'}
                value={emailAdd}
                onChangeText={setEmailAdd}
                containerStyle={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  elevation: 2,
                  padding: 0,
                }}
                textStyle={{
                  padding: 12,
                  borderRadius: 8,
                  color: '#333',
                  fontSize: 14,
                }}
              />
            </View>
            
            {/* Password Field */}
            <View style={{ marginBottom: 15 }}>
              <Text style={{ 
                fontSize: 14, 
                fontWeight: '600', 
                color: '#555',
                marginBottom: 5,
                marginLeft: 5
              }}>
                Password
              </Text>
              <CustomTextInput
                placeholder={'Create a password'}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                containerStyle={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  elevation: 2,
                  padding: 0,
                }}
                textStyle={{
                  padding: 12,
                  borderRadius: 8,
                  color: '#333',
                  fontSize: 14,
                }}
              />
            </View>
            
            {/* Confirm Password Field */}
            <View style={{ marginBottom: 20 }}>
              <Text style={{ 
                fontSize: 14, 
                fontWeight: '600', 
                color: '#555',
                marginBottom: 5,
                marginLeft: 5
              }}>
                Confirm Password
              </Text>
              <CustomTextInput
                placeholder={'Re-enter your password'}
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                containerStyle={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  elevation: 2,
                  padding: 0,
                }}
                textStyle={{
                  padding: 12,
                  borderRadius: 8,
                  color: '#333',
                  fontSize: 14,
                }}
              />
            </View>
          </View>

          {/* Register Button */}
          <CustomButton
            label={'CREATE ACCOUNT'}
            containerStyle={{
              backgroundColor: '#4a90e2',
              borderRadius: 8,
              marginVertical: 5,
              paddingVertical: 12,
              width: '100%',
              shadowColor: '#4a90e2',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3,
            }}
            textStyle={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 14,
              textAlign: 'center',
            }}
            onPress={handleRegister}
          />

          {/* Login Link */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
            }}
          >
            <Text style={{ color: '#666', fontSize: 13 }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGIN)}>
              <Text style={{ 
                color: '#4a90e2', 
                marginLeft: 5, 
                fontWeight: 'bold',
                fontSize: 13 
              }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          {/* Terms and Conditions */}
          <Text style={{ 
            color: '#999', 
            fontSize: 11, 
            textAlign: 'center',
            marginTop: 20
          }}>
            By signing up, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;