import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ListQuizGame from "./pages/ListQuizGame";
import { AuthProvider } from "./services/AuthContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/list-quiz-game-ican" element={<ListQuizGame />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
