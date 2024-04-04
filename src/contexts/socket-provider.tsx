import { ReactNode, createContext, useContext, useEffect } from 'react'
import { Socket, io } from 'socket.io-client'

const socket = io('http://localhost:8080')
const SocketContext = createContext<Socket>(socket)

const SocketProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    return () => {
      socket.disconnect()
    }
  }, [])

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
}

const useSocket = () => {
  return useContext(SocketContext)
}

export { SocketProvider, useSocket }
