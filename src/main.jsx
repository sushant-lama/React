import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //renders the page two times by strict mode not used in production
  // <StrictMode>
    <App />
  //  </StrictMode> 
)
