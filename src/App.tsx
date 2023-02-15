import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useLoginQuery } from "./redux/api/zkuadsApi";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import Game from "./pages/Game";

import "./theme/_main.scss";
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  // const { data, isLoading, isError, error } = useLoginQuery();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/game/:id" element={<Game />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App