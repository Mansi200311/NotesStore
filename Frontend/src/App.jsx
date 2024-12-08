import React from "react";
import Home from "./home/Home"
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Team from "./components/Team";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import PageNotFound from "./components/PageNotFound";
import DisableDevToolsOption from "./components/DisableTools/DisableDevToolsOption";
import DisableKeyShortcuts from "./components/DisableTools/DisableKeyShortcuts";
import DisableRightClick from "./components/DisableTools/DisableRightClick";

function App() {
  const [authUser, setAuthUser] = useAuth();
  //console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <DisableDevToolsOption/>
      <DisableKeyShortcuts/>
      <DisableRightClick/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="about" element={<AboutUs/>}></Route>
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
