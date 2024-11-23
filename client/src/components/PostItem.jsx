import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import "../styles/index.css";

export default function PostItem({ post, removePost }) {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post-content">
        <strong style={{ marginBottom: "10px" }}>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__buttons">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>OPEN</MyButton>
        <MyButton onClick={() => removePost(post)}>DELETE POST</MyButton>
      </div>
    </div>
  );
}
// Было const router = useHistory()
// Стало const router = useNavigate()
// Далее, router.push('/path') меняем на router('/path')
// router.replace('/path') меняем на router('/path', {replace: true})
// Если вы хотите использовать state, используйте router('/path', { state: { name:'Xyz' }})
