import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Theme>
          <App />
        </Theme>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
)
