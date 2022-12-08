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
          <NavBar/>
          <CreatePostForm addNewPostProperty={addNewPost}/>
          <PostList parentPosts={posts}/>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
  );
}

export default App;
