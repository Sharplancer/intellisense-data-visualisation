import { call, put } from 'redux-saga/effects'
import { intellisenseApi } from '../../api'
import { getReferenciaError, getReferenciaSuccess } from '../slices/referenciaSlice'

export function* getReferenciaSaga(action: any) {
  try {
    const { data } = yield call(intellisenseApi.getReferencia)
    if (data) {
      yield put(getReferenciaSuccess(data))
    }
  } catch (error) {
    yield put(getReferenciaError(error))
  }
}
