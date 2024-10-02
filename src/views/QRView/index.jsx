import React from 'react';
import '../../assets/styles/global.css';
import './index.css'
import { Scanner } from '@yudiel/react-qr-scanner';

function Index() {
  return (
    <div className='Home-Container'>
      <div>
        <Scanner onScan={(result) => console.log(result)} />;
      </div>
    </div>
  );
};

export default Index;