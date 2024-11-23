import {observer} from 'mobx-react-lite';
import { Route, Routes, Navigate } from "react-router-dom";
import useGlobalState from "../hooks/useGlobalState";
import { privateRoutes, publicRoutes } from "../routes";
import Activating from '../pages/Activating';

function AppRouter() {
  const { store } = useGlobalState();
  const { isAuth, isActivated, isRegistrated } = store;

  if (isRegistrated && !isActivated) {
    return (
      <Routes>
        <Route path="/activating" element={<Activating />} />
        <Route path="*" element={<Navigate to="/activating" />} />
      </Routes>
    );
  }

  return isAuth && isActivated ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default observer(AppRouter);