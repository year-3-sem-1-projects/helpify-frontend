import axios from '../lib/axios'

export const getAllOrganization = async () => {
  return (await axios.get('/organization/')).data.data
}
