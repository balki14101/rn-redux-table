import {all, put, takeLatest, call} from 'redux-saga/effects';
import {incrementSuccess, incrementError} from '../actions/counter';
import {INCREMENT_LOADING} from '../types/counter';

function* incrementSaga(action) {
  try {
    yield put(incrementSuccess());
  } catch (error) {
    yield put(incrementError());
  }
}

function* workerSaga() {
  yield takeLatest(INCREMENT_LOADING, incrementSaga);
}

function* counterSagas() {
  yield all([call(workerSaga)]);
}
export {counterSagas, workerSaga, incrementSaga};
