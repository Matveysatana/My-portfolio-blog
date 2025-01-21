import axios from 'axios'


// mail-smpt.vercel.app
// mail-smpt-matveys-projects-86ea41cd.vercel.app

export const instance = axios.create({
  baseURL: `https://mail-smpt.vercel.app`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
  },
})


