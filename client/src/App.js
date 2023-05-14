import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom'; is in src folder-> in index.js file
import BunnyForm from './components/BunnyForm';

function App() {

  useEffect(() => {
  axios.get("http://localhost:8000/api/bunnies")
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      {/* <Routes>
        < Route element={<BunnyForm/>} path="api/bunnies/create" />
      </Routes> */}
      <BunnyForm/>
    </div>
  );
}

export default App;