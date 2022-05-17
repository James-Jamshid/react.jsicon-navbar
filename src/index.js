import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,
   Route,
    Routes 
  } from 'react-router-dom';
import App from './components/App';
import Blog from './components/Blog'
import Docs from './components/Docs'
import Icons from './components/Icons'
import Plans from './components/Plans'
import Start from './components/Start'
import Support from './components/Support'

import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}> </Route>
    <Route path='/Blog' element={<Blog/>}></Route>
    <Route path='/Docs' element={<Docs/>}></Route>
    <Route path='/Icons' element={<Icons/>}></Route>
    <Route path='/Plans' element={<Plans/>}></Route>
    <Route path='/Start' element={<Start/>}></Route>
    <Route path='/Support' element={<Support/>}></Route>
    
  </Routes>
  </BrowserRouter>
);


