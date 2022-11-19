import { useEffect, useState } from 'react';


export function Add() {
  const [posts, setPosts] = useState([]);
  const BASE_URL = "https://react-test-sejo6.ondigitalocean.app/v1" 

  useEffect(() => {
    fetch(`${BASE_URL}/skils` )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
        {posts.map((post)=>
            <div>
               <h2>{post.title}</h2> 
               <p>{post.body}</p>
            </div>
        )}
    </div>

  )
}