/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import FriendAvatar from './src/components/FriendAvatar';
import HeartButton from './src/components/HeartButton';
// import Product from './src/components/Product';
// import Products from './src/components/Products';

import Basic from './src/Session04/Basic';
import FlexExample from './src/Session04/FlexExample';
import ImageBgExample from './src/Session04/ImageBgExample';
import Login1 from './src/Session04/Login/Login1';

import UI01 from './src/Session04/UI01';
import UI02 from './src/Session04/UI02';

// SESION 05
import ScrollViewExample from './src/Session05/ScrollViewExample';
import ScrollViewWithManyDataExample from './src/Session05/ScrollViewWithManyDataExample';
import FlatListExample from './src/Session05/FlatListExample';
import SectionListExample from './src/Session05/SectionListExample';
import SectionListAdvancedExample from './src/Session05/SectionListAdvancedExample';
import NetworkingExample from './src/Session06/NetworkingExample';
import GalleryHomework from './src/Session06/GalleryHomework';

// Session 06
import Login from './src/Session06/Login';
import Product from './src/Session06/Product';
// Session 07

import Example01 from './src/Session07/Example01';
// Session08
import AppNavigator from './src/Session08/AppNavigator';

const App = () => {
  return (
    <React.Fragment>
      {/* <Text>Hello React Native 1</Text> */}
      {/* <FriendAvatar></FriendAvatar> */}
      {/* <HeartButton></HeartButton> */}
      {/* <Product></Product> */}
      {/* <Products></Products> */}
      {/* <FlexExample /> */}
      {/* <ImageBgExample /> */}
      {/* <Login1 /> */}
      {/* <UI01 /> */}
      {/* <UI02 /> */}
      {/* <ScrollViewExample /> */}
      {/* <ScrollViewWithManyDataExample /> */}
      {/* <FlatListExample /> */}
      {/* <SectionListExample /> */}
      {/* <SectionListAdvancedExample /> */}
      {/* <NetworkingExample /> */}
      {/* <GalleryHomework /> */}
      {/* <Login /> */}
      {/* <Product /> */}

      {/* <Example01 /> */}
      <AppNavigator />
      {/* <Product2
        data={{
          id: 1,
          name: 'Kids Jumpsuit',
          coverImageUrl:
            'https://cb2.scene7.com/is/image/CB2/SnakeTableLampSHF19',
          price: 39,
          status: 'In stock',
          color: 'red',
          sizes: ['M', 'L', 'XL'],
          freeShip: false,
        }}
      /> */}
    </React.Fragment>
  );
};

export default App;
