import axios from 'axios'


// mail-smpt.vercel.app
// mail-smpt-matveys-projects-86ea41cd.vercel.app

export const instance = axios.create({
  baseURL: `http://mail-smpt.vercel.app`,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
})


