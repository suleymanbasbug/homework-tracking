import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Student from "./pages/Student";
import SignIn from "./pages/SignIn";
import Teacher from "./pages/Teacher";
import Admin from "./pages/Admin";
import RequireAuth from "./layouts/RequiredAuth";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/student"
          element={
            <RequireAuth>
              <Student />
            </RequireAuth>
          }
        />
        <Route
          path="/teacher"
          element={
            <RequireAuth>
              <Teacher />
            </RequireAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />
        <Route path="teacher/login" element={<SignIn userType={1} />} />
        <Route path="student/login" element={<SignIn userType={2} />} />
        <Route path="admin/login" element={<SignIn userType={3} />} />
      </Routes>
    </div>
  );
}

export default App;
