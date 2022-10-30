import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from '@remix-run/router';
import Products from './Layout/Products/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: () => fetch('products.json'),
      element : <Products></Products>
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
