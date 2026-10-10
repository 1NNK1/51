import React from 'react';
import { useAppSelector } from '../app/hooks';
import CartItem from '../features/cart/components/CartItem';
import { toast } from 'react-toastify';

// Страница корзины
const CartPage = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    toast.info("Заказ оформляется... Ожидайте подтверждения!");
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Ваша корзина</h2>
      {cartItems.length === 0 ? (
        <div style={styles.empty}><p>Корзина пуста</p></div>
      ) : (
        <>
          <div style={styles.list}>
            {cartItems.map(item => <CartItem key={item.id} item={item} />)}
          </div>
          <div style={styles.total}>
            <h3 style={{margin: '0 0 20px 0'}}>Итого: ${total}</h3>
            <button onClick={handleCheckout} style={styles.checkoutBtn}>Оформить заказ</button>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '20px' },
  empty: { textAlign: 'center', fontSize: '1.2rem', color: '#888', marginTop: '50px' },
  list: { display: 'flex', flexDirection: 'column', gap: '15px' },
  total: { textAlign: 'right', marginTop: '30px', padding: '20px', borderTop: '2px solid #ddd' },
  checkoutBtn: {
    padding: '12px 30px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  }
};

export default CartPage;
