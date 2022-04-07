// Imports: Dependencies
import React from 'react';
import {Provider} from 'react-redux';

import MainNavigation from './src/navigation';

// Imports: Redux Store
import store from './src/redux/store';

// React Native App
const App = () => {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};
export default App;
