import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useIdleTimer } from 'react-idle-timer';
import { toast } from 'react-toastify';

// Основной компонент
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Таймер бездействия
  const { getRemainingTime } = useIdleTimer({
    onIdle: () => {
      toast.warn("Вы долго не проявляли активность. Вы всё еще здесь?");
    },
    timeout: 30000,
    throttle: 500,
  });

  return (
    <Provider store={store}>
      <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
        <Header onNavigate={setCurrentPage} />
        <main style={{ paddingBottom: '50px' }}>
          {currentPage === 'home' ? <HomePage /> : <CartPage />}
        </main>
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
