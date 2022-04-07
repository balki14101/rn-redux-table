import {all, call} from 'redux-saga/effects';
import {counterSagas} from './counter';
function* rootSaga() {
  yield all([call(counterSagas)]);
}
export default rootSaga;
