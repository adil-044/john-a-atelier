import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import 'lenis/dist/lenis.css'
import './index.css'

/* SPA fallback note: gh-pages ships 404.html = index.html */
import App from './App.tsx'

gsap.registerPlugin(useGSAP)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
