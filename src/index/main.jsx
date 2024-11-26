import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '/src/component/Header.jsx'
import '/src/style/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <h3>Welocme Home Page</h3>
  </StrictMode>,
)
