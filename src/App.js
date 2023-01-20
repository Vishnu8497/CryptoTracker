import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import CryptoCurrencies from "./Components/CryptoCurrencies";
import CoinInfo from "./Pages/CoinInfo";
import SignUp from "./Pages/SignUp";
import Plan from "./Pages/Plan";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/plan" element={<Plan/>}/>
          <Route path="/cryptoTracker" element={<CryptoCurrencies />} />
          <Route path="/coins/:id" element={<CoinInfo />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
