// library imports
import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {connect} from 'react-redux';

// actions
import {increment} from '../../redux/actions/counter';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

/**
 * @function Counter
 * @description bla kuasdjajdjhasnkjasd
 * @returns {JSX}
 */
const Home = props => {
  const {counterValue, loading, triggerIncrement} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          triggerIncrement();
        }}
        style={{
          padding: 8,
          backgroundColor: 'lightblue',
          width: Width / 4,
          height: Height / 16,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <Text>{'+'}</Text>
      </TouchableOpacity>
      <Text style={{marginVertical: 16}}>{counterValue || 0}</Text>
      <TouchableOpacity
        style={{
          padding: 8,
          backgroundColor: 'lightgreen',
          width: Width / 4,
          height: Height / 16,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <Text>{'-'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  return {
    counterValue: state.counter.counterValue,
    loading: state.counter.loading,
  };
};
const mapDispatchToProps = {
  triggerIncrement: increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
