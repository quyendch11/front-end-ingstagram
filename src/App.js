import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import AuthLogIn from "./pages/Auth/Login";
import AuthSignUp from "./pages/Auth/SignUp";

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/signup" />} />
          <Route path="login" element={<AuthLogIn />} />
          <Route path="signup" element={<AuthSignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
