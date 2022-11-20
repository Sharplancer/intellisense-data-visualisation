import { createSlice } from '@reduxjs/toolkit'

const refernciaSlice = createSlice({
  name: 'referncia',
  initialState: {
    getting: false,
    got: false,
    tk1Data: [] as any[],
    hdt1Data: [] as any[],

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
      const filteredTK1 = Object.fromEntries(
        Object.entries(TK1)
        .filter(
          (key: any) => /^TK1_/gm.test(key)
        )
      );
      state.tk1Data = Object.entries(filteredTK1) as []
      const HDT1 = action.payload.current && action.payload.current.data.HDT1
      const filteredHDT1 = Object.fromEntries(
        Object.entries(HDT1)
        .filter(
          (key: any) => /^HDT1/gm.test(key)
        )
      );
      state.hdt1Data = Object.entries(filteredHDT1) as []
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
