import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import LoginInfoProvider from './pages/UserAccount/LoginInfo';
import RecipesInfoProvider from './pages/Home/Recipes/RecipesInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LoginInfoProvider>
      <RecipesInfoProvider>
        <App />
      </RecipesInfoProvider>
    </LoginInfoProvider>
  </React.StrictMode>
);
