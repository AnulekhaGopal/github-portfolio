import { Outlet } from "react-router-dom";
import Header from "./Navigation/Header";

export default function Root() {
  return (
    <>
      <Header />
      <div id="main-container">
        <Outlet />
      </div>
    </>
  );
}
