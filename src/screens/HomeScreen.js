import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IMG, ROUTES } from '../utils';
import { authLogout } from '../app/actions';
import { Button } from '@react-navigation/elements';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',  
      }}
    >
      <Image source={IMG.LOGO} style={{ width: 350, height: 350 }} />
      <Text style={{ fontSize: 20 }}>HomeScreen</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.PROFILE);
        }}
      >
        <View
          style={{
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 24, color: 'white' }}>VISIT PROFILE</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dispatch(authLogout());
        }}
      >
        <View
          style={{
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 24, color: 'white' }}>LOG OUT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;