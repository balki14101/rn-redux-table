// library imports
import React, {useEffect} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
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
  useEffect(() => {
    triggerFetchUser();
  }, []);
  const {loading, triggerFetchUser, userDetails} = props;
  const renderRow = (data = {}) => {
    return (
      <View
        key={String(data?.index)}
        style={{
          marginHorizontal: 4,
          flexDirection: 'row',
          padding: 4,
        }}>
        <View
          style={{
            backgroundColor: 'green',
            width: Width / 4,
            padding: 4,
          }}>
          <Text>{data?.first || '-'}</Text>
        </View>
        <View
          style={{
            backgroundColor: 'lightblue',
            width: Width / 2,
          }}>
          <Text>{data?.second || '-'}</Text>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: Width / 2,
          }}>
          <Text>{data?.third || '-'}</Text>
        </View>
        <View style={{backgroundColor: 'pink', width: Width / 2}}>
          <Text>{data?.fourth || '-'}</Text>
        </View>
        <View style={{backgroundColor: 'orange', width: Width / 2}}>
          <Text>{data?.fifth || '-'}</Text>
        </View>
      </View>
    );
  };
  return userDetails ? (
    <ScrollView horizontal>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        {renderRow({
          first: 'Username',
          second: 'Email',
          third: 'City',
          fourth: 'Phone',
          fifth: 'Company Name',
        })}
        {userDetails?.map((i, index) => {
          return renderRow({
            first: i?.name,
            second: i?.email,
            third: i?.address?.city,
            fourth: i?.phone,
            fifth: i?.company?.name,
            index: index,
          });
        })}
      </ScrollView>
    </ScrollView>
  ) : (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{marginVertical: 16, color: 'black'}}>
        {'Data not fetched yet'}
      </Text>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  return {
    loading: state.user.loading,
    userDetails: state.user.details,
  };
};
const mapDispatchToProps = {
  triggerFetchUser: fetchUserDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
