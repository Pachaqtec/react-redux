export const CHANGE_NAME = 'CHANGE_NAME'
export const SHOW_ICON = 'SHOW_ICON'

export const showName = (payload) => ({
  type: CHANGE_NAME,
  payload,
})

export const showIcon = () => ({
  type: SHOW_ICON
})