import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function PostList({ posts, title, removePost }) {
  if (!posts.length) {
    return <h1>Posts haven't been found!</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem post={post} removePost={removePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
