// library imports
import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';

// actions
import {fetchUserDetails} from '../../redux/actions/user';

/**
 * @function Home
 * @description Main screen
 * @returns {JSX}
 */
const Home = props => {
  // called for the first time when screen is mounted - componentDidMount
  useEffect(() => {
    // purposefully making to wait for 3 seconds to show loader
    setTimeout(() => {
      triggerFetchUser();
    }, 3000);
  }, []);

  const {loading, triggerFetchUser, userDetails} = props;
  const renderRow = (data = {}) => {
    return (
      <View
        key={String(data?.index)}
        style={[
          {
            backgroundColor: isNaN(data?.index) ? '#add8e6' : 'transparent',
          },
          styles.rowContainer,
        ]}>
        <View
          style={[
            {
              borderBottomColor:
                userDetails?.length === data?.index + 1
                  ? 'gray'
                  : 'transparent',
            },
            styles.firstFourColumns,
          ]}>
          <Text
            style={[
              styles.cellText,
              {
                fontWeight: isNaN(data?.index) ? 'bold' : 'normal',
              },
            ]}>
            {data?.first || '-'}
          </Text>
        </View>
        <View
          style={[
            {
              borderBottomColor:
                userDetails?.length === data?.index + 1
                  ? 'gray'
                  : 'transparent',
            },
            styles.firstFourColumns,
          ]}>
          <Text
            style={[
              styles.cellText,
              {
                fontWeight: isNaN(data?.index) ? 'bold' : 'normal',
              },
            ]}>
            {data?.second || '-'}
          </Text>
        </View>
        <View
          style={[
            {
              borderBottomColor:
                userDetails?.length === data?.index + 1
                  ? 'gray'
                  : 'transparent',
            },
            styles.firstFourColumns,
          ]}>
          <Text
            style={[
              styles.cellText,
              {
                fontWeight: isNaN(data?.index) ? 'bold' : 'normal',
              },
            ]}>
            {data?.third || '-'}
          </Text>
        </View>
        <View
          style={[
            {
              borderBottomColor:
                userDetails?.length === data?.index + 1
                  ? 'gray'
                  : 'transparent',
            },
            styles.firstFourColumns,
          ]}>
          <Text
            style={[
              styles.cellText,
              {
                fontWeight: isNaN(data?.index) ? 'bold' : 'normal',
              },
            ]}>
            {data?.fourth || '-'}
          </Text>
        </View>
        <View
          style={[
            {
              borderBottomColor:
                userDetails?.length === data?.index + 1
                  ? 'gray'
                  : 'transparent',
            },
            styles.firstFourColumns,
            {borderRightColor: 'gray'},
          ]}>
          <Text
            style={[
              styles.cellText,
              {
                fontWeight: isNaN(data?.index) ? 'bold' : 'normal',
              },
            ]}>
            {data?.fifth || '-'}
          </Text>
        </View>
      </View>
    );
  };
  return userDetails ? (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        paddingVertical: 8,
      }}>
      {/* To show the header of the table */}
      {renderRow({
        first: 'Username',
        second: 'Email',
        third: 'City',
        fourth: 'Phone',
        fifth: 'Company Name',
      })}
      {/* Render the contents of the table here */}
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
  ) : (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{marginVertical: 16, color: 'black'}}>
          {'Data not fetched yet'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cellText: {
    color: 'black',
    fontSize: 10,
  },
  firstFourColumns: {
    borderWidth: 1,
    borderLeftColor: 'gray',
    borderTopColor: 'gray',
    borderRightColor: 'transparent',
    flex: 1,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {marginHorizontal: 8, flexDirection: 'row'},
});

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
