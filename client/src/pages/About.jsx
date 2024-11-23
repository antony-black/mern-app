import { useNavigate } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";

export default function About() {
  const navigate = useNavigate();

  const backToPosts = () => {
    navigate("/login");
  };
  
  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "700" }}>
        This is my learning project...
      </h1>
      <MyButton onClick={backToPosts}>Back To Posts</MyButton>
    </div>
  );
}
