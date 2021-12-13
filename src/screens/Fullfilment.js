import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Fullfilment = ({navigation}) => {
  const {container, text} = styles;

  return (
    <SafeAreaView style={container}>
      <Text style={text}>FULFILLMENT SCREEN</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8FC',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 22,
    fontFamily: 'DMSans-Bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default Fullfilment;
