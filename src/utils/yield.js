const call = async ({
  dispatch,
  api,
  fetch,
  receive,
  failed
}) => {
  dispatch(fetch())
  try {
    const response = await api()
    if (response.success) {
      return dispatch(receive(response))
    }
    return dispatch(failed(response))
  } catch (error) {
    return dispatch(failed(error))
  }
}

export {
  call
}
