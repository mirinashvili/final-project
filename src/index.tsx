import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductProvider from './Components/ProductContext/ProductContext';
import { GlobalProvide } from './Components/Provider/GlobalProvide';
import LangState from './Components/lang';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalProvide>
      <ProductProvider>
   
    
      <LangState>
        <App />
      </LangState>
   
      </ProductProvider>
  </GlobalProvide>
  </React.StrictMode>
  
);


