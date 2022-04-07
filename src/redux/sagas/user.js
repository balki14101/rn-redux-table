import {all, put, takeLatest, call} from 'redux-saga/effects';
import {fetchUserDetailsSuccess, fetchUserDetailsError} from '../actions/user';
import {USER_DETAILS_LOADING} from '../types/user';

function* fetchUserSaga(action) {
  try {
    yield put(fetchUserDetailsSuccess());
  } catch (error) {
    yield put(fetchUserDetailsError());
  }
}

function* workerSaga() {
  yield takeLatest(USER_DETAILS_LOADING, fetchUserSaga);
}

function* userSagas() {
  yield all([call(workerSaga)]);
}
export {userSagas, workerSaga, fetchUserSaga};
