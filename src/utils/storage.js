import Cookies from 'js-cookie'

const getUserToken = () => {
  const token = Cookies.get('token')
  return token
}

export {
  getUserToken
}
