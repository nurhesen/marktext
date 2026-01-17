// Persistence helper for per-file read mode state using localStorage

const READ_MODE_KEY = 'marktext-read-mode-states'

export const getReadModeStates = () => {
  try {
    const states = localStorage.getItem(READ_MODE_KEY)
    return states ? JSON.parse(states) : {}
  } catch (e) {
    return {}
  }
}

export const setReadModeState = (pathname, readMode) => {
  const states = getReadModeStates()
  if (readMode) {
    states[pathname] = true
  } else {
    delete states[pathname]
  }
  localStorage.setItem(READ_MODE_KEY, JSON.stringify(states))
}

export const getReadModeForPath = (pathname) => {
  const states = getReadModeStates()
  return !!states[pathname]
}
