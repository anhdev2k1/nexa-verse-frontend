import { createContext, useContext, useState } from 'react'
enum KeySidebar {
  KEY_SIDEBAR = 'nexa-type-sidebar'
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SidebarContext = createContext<any>(null)
export const useSidebar = () => useContext(SidebarContext)

const SidebarProvider = ({ children }: { children: JSX.Element }) => {
  const [typeSidebar, setTypeSidebar] = useState(() => {
    try {
      const value = window.localStorage.getItem(KeySidebar.KEY_SIDEBAR)
      return value ? JSON.parse(value) : 'menu'
    } catch (error) {
      console.error('Error retrieving sidebar type from localStorage:', error)
      return 'menu'
    }
  })

  const changeTypeSidebar = (newValue: 'menu' | 'icon') => {
    try {
      window.localStorage.setItem(KeySidebar.KEY_SIDEBAR, JSON.stringify(newValue))
      setTypeSidebar(newValue)
    } catch (error) {
      console.error('Error updating sidebar type in localStorage:', error)
    }
  }

  return <SidebarContext.Provider value={{ typeSidebar, changeTypeSidebar }}>{children}</SidebarContext.Provider>
}

export default SidebarProvider
