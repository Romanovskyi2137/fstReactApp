import React, { useState, useRef, useMemo, useEffect } from 'react';
import Counter from '../components/Counter.jsx';
import ClassCounter from '../components/ClassCounter.jsx';
import '../styles/App.css';
import MyButton from '../components/UI/Button/MyButton.jsx';
import PostList from '../components/PostList.jsx';
import PostForm from '../components/PostForm.jsx';
import Select from '../components/UI/Select/Select.jsx';
import Input from '../components/UI/Input/Input.jsx';
import axios from 'axios';
import PostService from '../API/PostService.js';
import PostFilter from '../components/PostFilter.jsx';
import Modal from '../components/UI/Modal/Modal.jsx';
import { usePosts } from '../myHooks/usePosts.js';
import Loader from '../components/UI/Loader/Loader.jsx';
import useFetching from '../myHooks/useFetching.js';
import { getPageCount, getPagesArray } from '../utils/pages.js';
import Pagination from '../components/Pagination.jsx';


function Posts() {  
  const [posts1, setPosts1] = useState([]);

    const [filter, setFilter] = useState({sort: "", query: ""});

    const [modal, setModal] = useState(false);

    const [totalPages, setTotalPages] = useState(0);

    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts1(response.data);

      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
    });

    let pagesArray = getPagesArray(totalPages)

    const sortedAndSearchedPosts = usePosts(posts1, filter.sort, filter.query);

    useEffect(() => {
      fetchPosts(limit, page)
    }, []);


    const changePage = (page) => {
      setPage(page);
      fetchPosts(limit, page)
    }

    function createPost (newPost) {
      setPosts1([...posts1, newPost]);
      setModal(false)
    };
    
    function removePost (post) {
      setPosts1(posts1.filter(p => p.id !== post.id))
    }


  return (
    <div className="App">
      <MyButton style={{marginTop: "15px"}} onClick={() => setModal(true)}>Create post</MyButton>
      <Modal 
        visible={modal}
        setVisible={setModal}
        >
        <PostForm create={createPost}/>
      </Modal>

      <hr style={{margin: "25px 0"}}></hr>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      /> 
      {postError && <h1>Error: ${postError}</h1>

      }
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <Loader></Loader>
          </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Post list"}/> 
      }  
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>

    </div>
  )
}


export default Posts;
