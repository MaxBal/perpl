import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './components/ui/toast';
import { ModalProvider } from '@/components/ModalProvider';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <ModalProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ModalProvider>
    </ToastProvider>
  </StrictMode>
);