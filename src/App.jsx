import React from 'react';
import './App.css';
import Search from './components/Search';

const App = () => {
  return (
    <div className='ui grid container center aligned'>
      <div className='column eight wide'>
        <Search />
      </div>
    </div>
  );
};

export default App;
