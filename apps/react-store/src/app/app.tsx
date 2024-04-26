// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
// import styles from './app.module.css';

// import NxWelcome from './nx-welcome';
import { ProductList } from '@react-monorepo/products';
import { OrderList } from '@react-monorepo/orders';

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/orders" element={<OrderList />} />
    </Routes>
  );
}

export default App;
