import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { removeFromCart, updateQuantity } from '../model/cartSlice';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

// Элемент корзины
const CartItem = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    toast.warn(`${item.name} удален из корзины`);
  };

  return (
    <div style={styles.item}>
      <div style={styles.info}>
        <h4 style={{margin: 0}}>{item.name}</h4>
        <p style={{margin: '5px 0 0 0', color: '#666'}}>${item.price} за шт.</p>
      </div>
      <div style={styles.controls}>
        <button onClick={() => dispatch(updateQuantity({id: item.id, quantity: Math.max(1, item.quantity - 1)}))} style={styles.qtyBtn}>
          <FaMinus size={12} />
        </button>
        <span style={styles.qty}>{item.quantity}</span>
        <button onClick={() => dispatch(updateQuantity({id: item.id, quantity: item.quantity + 1}))} style={styles.qtyBtn}>
          <FaPlus size={12} />
        </button>
        <button onClick={handleRemove} style={styles.removeBtn}>
          <FaTrash size={14} />
        </button>
      </div>
    </div>
  );
};

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    borderBottom: '1px solid #eee',
    backgroundColor: 'white',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  info: { display: 'flex', flexDirection: 'column' },
  controls: { display: 'flex', alignItems: 'center', gap: '10px' },
  qtyBtn: {
    width: '25px',
    height: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9'
  },
  qty: { fontSize: '1rem', fontWeight: 'bold', minWidth: '20px', textAlign: 'center' },
  removeBtn: {
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center'
  }
};

export default CartItem;
