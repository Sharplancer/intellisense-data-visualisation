import { createSlice } from '@reduxjs/toolkit'

const refernciaSlice = createSlice({
  name: 'referncia',
  initialState: {
    getting: false,
    got: false,
    data: [] as any[],

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
      const TK1 = action.payload.current && action.payload.current.data.TK1
      const filtered = Object.fromEntries(
        Object.entries(TK1)
        .filter(
          (key: any) => /^TK1_/gm.test(key)
        )
      );
      state.data = Object.entries(filtered) as []
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
