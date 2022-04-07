import {
  INCREMENT_LOADING,
  INCREMENT_SUCCESS,
  INCREMENT_ERROR,
} from '../types/counter';

const increment = (payload = {}) => ({
  type: INCREMENT_LOADING,
  payload: payload,
});

const incrementSuccess = (response = {}) => ({
  type: INCREMENT_SUCCESS,
  response: response,
});

const incrementError = (error = {}) => ({type: INCREMENT_ERROR, error: error});

export {increment, incrementSuccess, incrementError};
