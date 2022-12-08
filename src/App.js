import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import './App.css';

function App() {
    const [posts, setPosts] = useState([])

    function addNewPost(entry){
      let tempPosts = [...posts, entry];
      setPosts(tempPosts);
    }

    return (
      <div className='background'>
        <div>
          <NavBar/>
        </div>
        <div className='create-post-flex-container'>
          <CreatePostForm addNewPostProperty={addNewPost}/>
        </div>
        <div className='create-post-flex-container'>
          <PostList parentPosts={posts}/>
        </div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
  );
}

export default App;
