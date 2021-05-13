export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS'
export const AUTH_USER_LOADING = 'AUTH_USER_LOADING'
export const AUTH_USER_ERROR = 'AUTH_USER_ERROR'

export const data = (data) => ({
  type: AUTH_USER_SUCCESS,
  data
})

export const loading = (loading) => ({
  type: AUTH_USER_LOADING,
  loading
})

export const error = (error) => ({
  type: AUTH_USER_ERROR,
  error
})

export const auth = (obj) => {
  return (dispatch) => {
    dispatch(error(null))
    dispatch(loading(true))

    fetch('http://localhost:4000/user', {
      method: 'GET'
    })
    .then((response) => response.json())
    .then(({ usuario, password }) => {
      if (usuario === obj.usuario && password === obj.password) {
        dispatch(data({
          status: 200,
          response: {
            usuario,
            password,
            email: 'loda@gmail.com'
          }
        }))
      } else {
        dispatch(error({
          state: 400,
          error: 'Usuario y/o password incorrecto'
        }))
      }
      dispatch(loading(false))
      console.log('response')
    })
    .catch((error) => {
      console.error('error', error)
      dispatch(error(error))
    })
  }
}