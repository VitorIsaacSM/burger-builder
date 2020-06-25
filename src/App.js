import React from 'react';
import styles from './App.module.scss';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        header
      </div>
      <main>
        <BurgerBuilder/>
      </main>
    </div>
  );
}

export default App;
