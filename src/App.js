import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from '@remix-run/router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './Products/Products';
import ProductDetails from './Product-details/ProductDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: () => fetch('products.json'),
      element : <Products></Products>
    },
    {
      path: '/product-details/:id',
      loader: () => fetch('products.json'),
      element : <ProductDetails></ProductDetails>
    }

  ])
  return (
    <div className="App">
      <div className="App">
        <RouterProvider router={router} />
    </div>
    </div>
  );
}

export default App;
