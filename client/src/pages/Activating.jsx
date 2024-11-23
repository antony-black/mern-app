import { useNavigate } from "react-router-dom";
import useGlobalState from "../hooks/useGlobalState";
import MyButton from "../components/UI/button/MyButton";

export default function Activating() {
  const { store } = useGlobalState();
  const navigate = useNavigate();

  const backToRegistration = () => {
    store.setRegistrated(false);
    navigate("/login");
  }
  
  return (
   <div>
     <h1 style={{ textAlign: "center", fontWeight: "700" }}>
      Please, activate your account via email, by the link.
    </h1>
    <MyButton onClick={backToRegistration}>Back To Registration</MyButton>
   </div>
  );
}
