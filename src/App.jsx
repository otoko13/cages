import React from 'react';
import './App.scss';

import CageCage from './components/CageCage';

function App() {
  return (
    <div className="App">
      <CageCage initialCages={3} />
    </div>
  );
}

export default App;
