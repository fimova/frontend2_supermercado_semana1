import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ArticulosProvider } from './context/ArticulosContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ArticulosProvider>
        <App />
      </ArticulosProvider>
    </BrowserRouter>
  </StrictMode>,
)
