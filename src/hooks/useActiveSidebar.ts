import { useState } from 'react'

const useActiveSidebar = (active: string) => {
  const [activeSidebar, setActiveSidebar] = useState<string>(active)

  return { activeSidebar, setActiveSidebar }
}

export default useActiveSidebar
