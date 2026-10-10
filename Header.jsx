import React from 'react';
import { useAppSelector } from '../app/hooks';
import { FaShoppingCart, FaStore } from 'react-icons/fa';

// Компонент шапки
const Header = ({ onNavigate }) => {
  const cartItems = useAppSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={styles.header}>
      <div onClick={() => onNavigate('home')} style={styles.logo}>
        <FaStore size={24} style={{marginRight: '10px'}} /> MyStore
      </div>
      <nav>
        <button onClick={() => onNavigate('home')} style={styles.navBtn}>Каталог</button>
        <button onClick={() => onNavigate('cart')} style={styles.navBtn}>
          <FaShoppingCart size={18} style={{marginRight: '5px'}} />
          Корзина <span style={styles.badge}>{totalItems}</span>
        </button>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    backgroundColor: '#444',
    color: 'white',
    height: '60px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  },
  logo: {
    cursor: 'pointer',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  navBtn: {
    marginLeft: '1rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center'
  },
  badge: {
    backgroundColor: '#444',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '0.8rem',
    marginLeft: '5px'
  }
};

export default Header;
