


// import React from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

// import App from './App';
// import { UserProvider } from './contexts/user.context';
// import { ProductsProvider } from './contexts/products.context';

// import './index.scss';

// const rootElement = document.getElementById('root');

// render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <UserProvider>
//         <ProductsProvider>
//           <App />
//         </ProductsProvider>
//       </UserProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   rootElement
// );



import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/icon.context';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);