import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useLoginQuery } from "./redux/api/zkuadsApi";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import Game from "./pages/Game";

import "./theme/_main.scss";

const App = () => {
  const { data, isLoading, isError, error } = useLoginQuery();

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={data?.loggedIn ? <Home /> : <Navigate to='/login' />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App