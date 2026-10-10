import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchProducts } from '../model/productsSlice';
import { addToCart } from '../../cart/model/cartSlice';
import { toast } from 'react-toastify';
import { FaCartPlus } from 'react-icons/fa';

// Список товаров
const ProductList = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector(state => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} добавлен в корзину!`);
  };

  if (status === 'loading') return <div style={styles.center}>Загрузка товаров...</div>;
  if (status === 'failed') return <div style={styles.center}>Ошибка: {error}</div>;

  return (
    <div style={styles.grid}>
      {items.map(product => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h3 style={{margin: '10px 0'}}>{product.name}</h3>
          <p style={{color: '#666', fontSize: '0.9rem'}}>{product.description}</p>
          <div style={styles.priceRow}>
            <span style={styles.price}>${product.price}</span>
            <button
              onClick={() => handleAddToCart(product)}
              style={styles.addBtn}
            >
              <FaCartPlus size={16} style={{marginRight: '5px'}} /> Добавить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px'
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '15px',
    textAlign: 'center',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  image: { width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' },
  priceRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px'
  },
  price: { fontSize: '1.2rem', fontWeight: 'bold', color: '#444' },
  addBtn: {
    padding: '0.6rem 1rem',
    backgroundColor: '#ddd',
    border: '1px solid #444',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center'
  },
  center: { textAlign: 'center', marginTop: '50px', fontSize: '1.2rem' }
};

export default ProductList;
