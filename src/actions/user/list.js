export const USER_LIST_ERROR = 'USER_LIST_ERROR'
export const USER_LIST_LOADING = 'USER_LIST_LOADING'
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS'
export const USER_LIST_RESET = 'USER_LIST_RESET'

export const error = (error) => ({
  type: USER_LIST_ERROR,
  error
})

export const loading = (loading) => ({
  type: USER_LIST_LOADING,
  loading,
})

export const success = (data) => ({
  type: USER_LIST_SUCCESS,
  data,
})

export const list = (url) => {
  return (dispatch) => {
    dispatch(loading(true))
    dispatch(error(null))

    fetch(url, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => {
      dispatch(loading(false))
      dispatch(success(response.results))
    })
    .catch((e) => {
      dispatch(loading(false))
      dispatch(error(e))
    })
  }
}

export const reset = () => ({
  type: USER_LIST_RESET
})