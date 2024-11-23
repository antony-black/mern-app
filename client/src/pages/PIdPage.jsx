import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostService } from "../services/PostService";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/UI/Loader/Loader";
import MyButton from "../components/UI/button/MyButton";

export default function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetch(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchCommentsById, isCommentsLoading, commentsError] = useFetch(async () => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data);
  });

  const navigate = useNavigate();

  const backToPosts = () => {
    navigate("/login");
  };

  useEffect(() => {
    fetchPostById();
    fetchCommentsById();
  }, []);
  
  return (
    <div>
      <h1>You opened the post by id, {params.id}</h1>
      {
        isLoading 
          ? <Loader/>
          : <div>{post.id}. {post.title}</div>
      }
      <h2 style={{marginTop: 15}}>Comments:</h2>
        {
          isCommentsLoading 
            ? <Loader/>
            : <div>
              {
                comments.map(com => (
                  <div key={com.email} style={{marginTop: 15}}>
                    <h5>{com.email}</h5>
                    <div>{com.body}</div>
                  </div>
                ))
              }
            </div>
        }
        <MyButton onClick={backToPosts}>Back To Posts</MyButton>
      </div>
  )
}