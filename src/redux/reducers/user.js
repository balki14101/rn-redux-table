import {
  USER_DETAILS_LOADING,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_ERROR,
} from '../types/user';

const initialState = {
  loading: false,
  details: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_DETAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        details: action.response,
      };
    }
    case USER_DETAILS_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return {...state};
    }
  }
};

export default userReducer;
