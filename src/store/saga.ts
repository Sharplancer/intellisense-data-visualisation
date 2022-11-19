import { all, takeLatest } from 'redux-saga/effects'
import { getReferenciaSaga } from './saga/referenciaSaga'
import { getReferencia } from './slices/referenciaSlice'

function* rootSaga() {
  yield all([
    takeLatest(getReferencia.type, getReferenciaSaga),
  ])
}

export default rootSaga
