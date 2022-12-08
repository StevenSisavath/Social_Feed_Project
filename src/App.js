import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import PostList from './Components/PostList/PostList';
import './App.css';

function App() {
    const [posts, setPosts] = useState([])

    return (
      <div>
          <NavBar/>
          <PostList parentPosts={posts}/>
      </div>
  );
}

export default App;
