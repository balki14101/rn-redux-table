import {
  INCREMENT_LOADING,
  INCREMENT_SUCCESS,
  INCREMENT_ERROR,
} from '../types/counter';

const initialState = {
  loading: false,
  counterValue: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case INCREMENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        counterValue: state.counterValue + 1,
      };
    }
    case INCREMENT_ERROR: {
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

export default counterReducer;
