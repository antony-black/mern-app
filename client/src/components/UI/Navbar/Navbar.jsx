import {observer} from 'mobx-react-lite';
import { NavLink } from "react-router-dom";
import useGlobalState from "../../../hooks/useGlobalState";
import MyButton from "../button/MyButton";
import styles from "./Navbar.module.css";

 function Navbar() {
  const { store } = useGlobalState();

  // const logOut = () => {
  //   setAuth(false);
  //   localStorage.removeItem("auth");
  // };
  return (
    <div className={styles.navbar}>
      <h1>
  {
    store.isAuth && store.isActivated
      ? (
        <>
          The user, {store.user.email}, has been authorized.<br />
          Account has been activated by email, {store.user.email}.
        </>
      )
      : "Get authorized"
  }
</h1>

      <MyButton className={styles.newBtn} onClick={() => store.logout()}>
        LogOut
      </MyButton>
      <div className={styles.navbar__links}>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>
      </div>
    </div>
  );
}

export default observer(Navbar);