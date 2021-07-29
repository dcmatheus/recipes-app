import React from 'react';
import Header from '../components/Header';

export default function Cocktails() {
  const name = 'Bebidas';
  const showSearchButton = true;
  return (
    <div>
      <Header pageName={ name } showSearchButton={ showSearchButton } />
      Cocktails
    </div>
  );
}