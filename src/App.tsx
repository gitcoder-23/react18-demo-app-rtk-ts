import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserList from "./pages/crud_fake_server/UserList";
import UserView from "./pages/crud_fake_server/UserView";
import ToastMessage from "./components/ToastMessage";

const App: React.FC = () => {
  return (
    <div className="container  mt-4">
      <h1>ReactJs CRUD App With Redux-ToolKit-builder Typescript</h1>{" "}
      <ToastMessage />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/view/:vid" element={<UserView />} />
      </Routes>
    </div>
  );
};

export default App;
