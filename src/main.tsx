import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from './components/ui/sonner.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SidebarProvider from './contexts/sidebar-provider.tsx'
import { GraphQLProvider } from './contexts/graphql-provider.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ThemeProvider } from './contexts/theme-provider.tsx'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <GraphQLProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        <QueryClientProvider client={queryClient}>
          <SidebarProvider>
            <App />
          </SidebarProvider>
          <Toaster position='top-right' />
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </GraphQLProvider>
  </ThemeProvider>
)
