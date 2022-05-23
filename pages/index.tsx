import "../styles/globals.css";

import Dashboard from "../components/Dashboard/Dashboard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <div id="ModalPortal"></div>
    </>
  );
}
