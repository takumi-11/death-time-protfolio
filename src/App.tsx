import React from 'react';
import Header from './components/organisms/Header';
import Content from './components/organisms/Content';

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: 50 }} className='bg-gray-100 h-screen w-full left-0 top-0'>
        <Content />
      </div>
    </div>
  );
}

export default App;
