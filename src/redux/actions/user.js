import {
  USER_DETAILS_LOADING,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_ERROR,
} from '../types/user';

const fetchUserDetails = (payload = {}) => ({
  type: USER_DETAILS_LOADING,
  payload: payload,
});

const fetchUserDetailsSuccess = (response = {}) => ({
  type: USER_DETAILS_SUCCESS,
  response: response,
});

const fetchUserDetailsError = (error = {}) => ({
  type: USER_DETAILS_ERROR,
  error: error,
});

export {fetchUserDetails, fetchUserDetailsSuccess, fetchUserDetailsError};
