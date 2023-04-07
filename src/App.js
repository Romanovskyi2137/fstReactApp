import React, { useState, useRef, useMemo, useEffect } from 'react';
import Counter from './components/Counter.jsx'
import ClassCounter from './components/ClassCounter.jsx';
import './styles/App.css';
import MyButton from './components/UI/Button/MyButton.jsx';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm.jsx';
import Select from './components/UI/Select/Select.jsx';
import Input from './components/UI/Input/Input.jsx';
import axios from 'axios';
import PostService from './API/PostService.js';
import PostFilter from './components/PostFilter.jsx';
import Modal from './components/UI/Modal/Modal.jsx';
import {usePosts} from './myHooks/usePosts.js';
import Loader from './components/UI/Loader/Loader.jsx';
import useFetching from './myHooks/useFetching.js';
import { getPageCount, getPagesArray } from './utils/pages.js';
import Pagination from './components/Pagination.jsx';
import { BrowserRouter } from 'react-router-dom';
import About from './pages/About.jsx';
import Posts from './pages/Posts.jsx';
import Navbar from './components/UI/Navbar/Navbar.jsx';
import AppRouter from './components/AppRouter.jsx';


function App() {  
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  )
}


export default App;
