import {observer} from 'mobx-react-lite';
import useGlobalState from "../hooks/useGlobalState";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { useState } from "react";

function Login() {
  const { store } = useGlobalState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const login = (event) => {
  //   event.preventDefault();
  //   setAuth(true);
  // };
  return (
    <div>
      <h1>REGISTRATION or LOGIN</h1>
      {/* <form> */}
      <div>
        <MyInput
          value={email}
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <MyInput
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <MyButton onClick={() => store.registration(email, password)}>
          Registration
        </MyButton>
        <MyButton onClick={() => store.login(email, password)}>Login</MyButton>
      </div>
      {store.error && <p>{store.error}</p>}
      {/* </form> */}
    </div>
  );
}

export default observer(Login);