
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import BasketProducts from './components/BasketProducts';
import Navbar from './components/Navbar';
import { updateTotal } from './features/basketSlice';
import { useEffect } from 'react';

function App() {
  const { products } = useSelector((store) => store.basket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateTotal())
  }, [products, dispatch])

  return (
    <div className="App">
      <h1> Redux checkout </h1>
      <Navbar />
      <BasketProducts />

    </div>
  );
}

export default App;
