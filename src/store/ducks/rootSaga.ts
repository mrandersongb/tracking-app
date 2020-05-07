import {all, fork} from 'redux-saga/effects';

import {watchLoginRequest} from './authentication/sagas';
import {watchRegisterRequest} from './register/sagas';

export default function* rootSaga() {
  return yield all([fork(watchLoginRequest), fork(watchRegisterRequest)]);
}
