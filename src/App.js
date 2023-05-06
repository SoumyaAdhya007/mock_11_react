// import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Post from './Components/post';
import View from './Components/view';
function App() {
  const [posts,setPosts]=useState([])
  const [loading,setLoading]=useState(true)
  async function fetchPosts(){
    try {
      let res= await fetch("https://mock-11-server.onrender.com/api/view");
      if(res.ok){
       let data= await res.json()
       setPosts(data)
        setLoading(false)
      }
    } catch (error) {
      setLoading(true)
    }
  }
  useEffect(()=>{
    fetchPosts()
  },[])
  return loading?<h1>Loading...</h1>: (
    <div className="App">
      <h1>Post Notice</h1>
      <hr/>
      <Post fetchPosts={fetchPosts}/>
      <hr/>

      <h1>View Posts</h1>
      <hr/>

      {posts.map((item)=>{
       return <View key={item._id} id={item._id} Author_Name={item.Author_Name} Notice_Title={item.Notice_Title} Notice_Description={item.Notice_Description} fetchPosts={fetchPosts}/>

      })}
      <hr/>

    </div>
  );
}

export default App;
