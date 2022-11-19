import axios from "axios"

const API_URL = 'https://reference.intellisense.io/thickenernn/v1/referencia'

export const intellisenseApi = {
  async getReferencia() {
    try {
      const res: any = await axios({
        method: 'get',
        url: API_URL,
      })
      return res;
    } catch (err) {
      throw err
    }
  }
}