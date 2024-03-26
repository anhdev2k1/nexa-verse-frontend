import { useState } from 'react'

enum KeySidebar {
  KEY_SIDEBAR = 'nexa-type-sidebar'
}
const useChangeSidebar = (type: 'menu' | 'icon') => {
  const [typeSidebar, setTypeSidebar] = useState<string>(() => {
    try {
      const value = window.localStorage.getItem(KeySidebar.KEY_SIDEBAR)

      if (value) {
        return JSON.parse(value)
      } else {
        window.localStorage.setItem(KeySidebar.KEY_SIDEBAR, JSON.stringify(type))
        return type
      }
    } catch (err) {
      return type
    }
  })

  const changeTypeSidebar = (newValue: 'menu' | 'icon') => {
    try {
      window.localStorage.setItem(KeySidebar.KEY_SIDEBAR, JSON.stringify(newValue))
      setTypeSidebar(newValue)
      // eslint-disable-next-line no-empty
    } catch (err) {}
  }
  return { typeSidebar, changeTypeSidebar }
}

export default useChangeSidebar
