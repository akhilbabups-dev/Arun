import React from 'react';
import './default.scss';
import Header from './component/header';
import Homepage from './pages/homepage';
function App() {
  return (
    <div className="App">
      <div className='main'>
        <Header/>
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
