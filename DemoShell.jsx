import React from 'react';
import './shell.css';

// Оболочка показывает, что демонстрирует проект, и оборачивает рабочее приложение.
const INFO = {
  number: 51,
  title: "Интернет-магазин на Redux Toolkit",
  description: "Каталог товаров, корзина, уведомления react-toastify и таймер бездействия react-idle-timer.",
  shows: ["Структура features/products и features/cart", "Страницы HomePage и CartPage"],
  how: ["Добавляйте товары в корзину и переходите на страницу корзины"],
  files: "src/\n├── app/\n│   ├── hooks.js\n│   └── store.js\n├── components/\n│   └── Header.jsx\n├── features/\n│   ├── cart/\n│   │   ├── api/\n│   │   ├── components/\n│   │   │   └── CartItem.jsx\n│   │   └── model/\n│   │       └── cartSlice.js\n│   └── products/\n│       ├── api/\n│       ├── components/\n│       │   └── ProductList.jsx\n│       └── model/\n│           └── productsSlice.js\n├── pages/\n│   ├── CartPage.jsx\n│   └── HomePage.jsx\n├── services/\n│   └── api/\n├── shared/\n│   └── styles/\n├── shell/\n│   ├── DemoShell.jsx\n│   └── shell.css\n├── App.jsx\n├── index.css\n└── main.jsx",
};

const DemoShell = ({ children }) => (
  <div className="shell">
    <header className="shell-header">
      <p className="shell-tag">ДЗ {INFO.number}</p>
      <h1 className="shell-title">{INFO.title}</h1>
      <p className="shell-description">{INFO.description}</p>
    </header>

    <div className="shell-info">
      <section className="shell-box">
        <h2>Что показывает</h2>
        <ul>
          {INFO.shows.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="shell-box">
        <h2>Как проверить</h2>
        <ul>
          {INFO.how.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>

    <h2 className="shell-section-title">Работа приложения</h2>
    <main className="shell-stage">{children}</main>

    <h2 className="shell-section-title">Структура src</h2>
    <pre className="shell-files">{INFO.files}</pre>
  </div>
);

export default DemoShell;
