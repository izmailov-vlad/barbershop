import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/base.css'
import './styles/buttons.css'
import './styles/responsive.css'
import './styles/colors.css'
import './components/ui/Button/Button.scss'
import './styles/no-animations.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
