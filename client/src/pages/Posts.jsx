import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import { useFetch } from "../hooks/useFetch";
import { PostService } from "../services/PostService";
import Loader from "../components/UI/Loader/Loader";
import { getPages } from "../utils/pages";
import Pagination from "../components/Pagination";
import Navbar from "../components/UI/Navbar/Navbar";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [modalVisibility, setModalVisibility] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetch(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPage(getPages(totalCount, limit));
  });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    const updatedPosts = posts.filter((item) => post.id !== item.id);
    setPosts(updatedPosts);
  };

  const openModal = () => {
    setModalVisibility(true);
  };

  const changePage = (pageNum) => {
    setPage(pageNum);
  };

  useEffect(() => {
    fetchPosts();
  }, [limit, page]);

  return (
    <div className="App">
      <Navbar/>
      <MyButton onClick={openModal}>Create post</MyButton>
      <MyModal visibility={modalVisibility} setVisibility={setModalVisibility}>
        <PostForm createNewPost={createNewPost} />
      </MyModal>

      {postError && <h1>The error is happened, ${postError}</h1>}

      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title={"Posts"}
          removePost={removePost}
        />
      )}
     <Pagination totalPage={totalPage} page={page} changePage={changePage}/>
    </div>
  );
}

export default Posts;
