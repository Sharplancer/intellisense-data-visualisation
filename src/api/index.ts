import axios from "axios"

const API_URL = 'https://reference.intellisense.io/thickenernn/v1/referencia'

export const intellisenseApi = {
  async getReferencia() {
    try {
      const res = await axios({
        method: 'get',
        url: API_URL,
      })
      const resBody = res.data
      return resBody
    } catch (err) {
      throw err
    }
  }
}