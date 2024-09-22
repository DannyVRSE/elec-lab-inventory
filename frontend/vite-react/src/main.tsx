import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "bootswatch/dist/solar/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
