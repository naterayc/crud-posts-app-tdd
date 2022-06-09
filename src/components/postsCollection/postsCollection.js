import React, { useEffect, useState } from "react";
import { BASE_URL } from '../../constants/constants';
import Post from "../post/post";

//import  {getAllPosts} from '../../postsServices/postsServices'

const PostsCollection = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`${BASE_URL}/posts`)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(setError('Connection error, please try again later'))
    }, []);
    
    return (
        <div>
            {error.length > 0 && <p>{error}</p>}
            {posts.map(post =>
                <Post key={post.id}/>
            )}
        </div>
    )
}

export default PostsCollection;
