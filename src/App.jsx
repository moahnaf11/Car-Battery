import { useState } from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}

export default App;
