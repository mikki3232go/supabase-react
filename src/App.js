import './App.css';
import { useState, useEffect} from 'react'
import {supabase} from './client'

function App() {
  const [posts,setPosts] = useState([]);
  const [post,setPost] = useState({title: "",method : ""});
  const {title,method} = post;
  useEffect(()=>{
    fetchPosts()
  },[])
  async function fetchPosts(){
    const {data} = await supabase.from('smoothies').select();
    setPosts(data);
    console.log("data:",data)
    
      
      
  }
  async function createPosts(){
    await supabase.from('smoothies').insert([{title,method}]).single();
    setPost({title:"",method:""});
    fetchPosts();
    
    
  }
  async function resetPosts(){
   
    setPosts([{title: "",content : ""}]);
    
  }
  return (
    <div className="App">
      <input
        placeholder='Title' value ={title}
        onChange ={e =>setPost({...post,title:e.target.value})}
     />
     <input
        placeholder='Content' value ={method}
        onChange ={e=>setPost({...post,method:e.target.value})}
     />
     <button onClick={createPosts}>Create Post</button>
     <button onClick={resetPosts}>Reset</button>
     {
      
     posts.map(post =>(
        <div key ={post.id}>
          <h3>{post.title}</h3>
          <p>{post.method}</p>
        </div>
      ))
     }
    </div>
  );
}

export default App;
