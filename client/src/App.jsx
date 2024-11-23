import {observer} from 'mobx-react-lite';
import { useEffect } from "react";
import "./styles/index.css";
import useGlobalState from "./hooks/useGlobalState";
import AppRouter from "./components/AppRouter";
import Loader from './components/UI/Loader/Loader';

function App() {
  const {store} = useGlobalState();

  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  return (
    <div>
      {store.isAuth === undefined ? <Loader/> : <AppRouter/>}
    </div>
  );
}

export default observer(App);
