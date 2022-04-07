import {all, put, takeLatest, call} from 'redux-saga/effects';
import {fetchUserDetailsSuccess, fetchUserDetailsError} from '../actions/user';
import {USER_DETAILS_LOADING} from '../types/user';

// user imports
import {fetchUser} from '../../api/user';

function* fetchUserSaga(action) {
  try {
    const fetchUserResponse = yield call(fetchUser);
    yield put(fetchUserDetailsSuccess(fetchUserResponse));
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
