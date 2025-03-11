
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import Screen from './Screen.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Screen />    
    </StrictMode>,
)
