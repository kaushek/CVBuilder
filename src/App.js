import './App.css';
import React, {useState, useEffect} from 'react';
import ErrPage from './components/ErrPage';
import PromptUser from './components/PromptUser';
import Resume from './components/Resume';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const converter = require('number-to-words')
function App() {
  const [userInfo, setUserInfo] = useState({});
  const [source, setSource] = useState('');
  const randomNo = Math.floor(Math.random() * 10e4);
  const randomAlphaNo = converter.toWords(randomNo);

  const generateImage = () => {
    setSource(`https://robohash.org/stefan=${randomAlphaNo}`);
  }

  useEffect(() => {
    generateImage();
  })

  function handleChange(e) {
    setUserInfo(prevInfo => {
      return {
        ...prevInfo, 
        [e.target.name] : e.target.value
      }
    })
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<PromptUser userObject = {userInfo} imageSource = {source} handleChange = {handleChange}/>}/>
        <Route path='/resume' element={<Resume userObject = {userInfo} imageSource = {source}/>}/>
        <Route path='*' element={<ErrPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
