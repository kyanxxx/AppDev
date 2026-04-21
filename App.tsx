import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import AppNav from './src/navigations';
import rootSaga from './src/app/sagas';
import configureStore from './src/app/reducers';

const { store, runSaga } = configureStore();
runSaga(rootSaga);

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AppNav />
      </View>
    </Provider>
  );
};

export default App;
