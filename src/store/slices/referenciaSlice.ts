import { createSlice } from '@reduxjs/toolkit'

const refernciaSlice = createSlice({
  name: 'referncia',
  initialState: {
    getting: false,
    got: false,
    data: {} as {},

    error: {}
  },
  reducers: {
    /**
     * getReferencia
     */
    getReferencia(state) {
      state.getting = true
      state.got = false
    },
    getReferenciaSuccess(state, action) {
      state.getting = false
      state.got = true
      state.data = action.payload
    },
    getReferenciaError(state, action) {
      state.getting = false
      state.got = false
      state.error = action.payload
    }
  }
})

export const { getReferencia, getReferenciaSuccess, getReferenciaError } = refernciaSlice.actions
export default refernciaSlice.reducer
