import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateOutlet from "./components/PrivateOutlet";
import PublicRoute from "./components/PublicRoute";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
import Signup from "./components/pages/Signup";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/" element={<PublicRoute />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="quiz/:id" element={<Quiz />} />
              <Route path="result/:id" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}
