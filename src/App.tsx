import React from 'react';
import ProductPage from './components/ProductPage';
import CheckoutPage from './components/CheckoutPage';

function App() {
  // Simple client-side routing
  const path = window.location.pathname;
  const isCheckoutPage = path === '/checkout' || path.endsWith('/checkout');

  return isCheckoutPage ? <CheckoutPage /> : <ProductPage />;
}

export default App;