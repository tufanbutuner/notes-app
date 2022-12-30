import Dashboard from "../components/Dashboard/Dashboard";
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../context/AuthContext";

export default function Home() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Dashboard />
      <div id="ModalPortal"></div>
    </AuthContextProvider>
  );
}
