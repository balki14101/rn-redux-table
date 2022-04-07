// library imports
import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {connect} from 'react-redux';

// actions
import {fetchUserDetails} from '../../redux/actions/user';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

/**
 * @function Counter
 * @description bla kuasdjajdjhasnkjasd
 * @returns {JSX}
 */
const Home = props => {
  const {loading, triggerFetchUser} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{marginVertical: 16}}>{'Hello world'}</Text>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  return {
    loading: state.user.loading,
  };
};
const mapDispatchToProps = {
  triggerFetchUser: fetchUserDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
