import logo from './logo.svg';
import './App.css';
import Fitting from './Fitting';
import { useState, useEffect } from 'react';
import {call} from './service/ApiService';

function App() {

  const [name, setName] = useState('')

    useEffect(() => {
        call("/test/mybatisTest", "001","GET")
          .then(res => setName(res));
    }, []);

  return (
    <div className="App">
      이름 : {name}
    </div>
  );
}

export default App;
