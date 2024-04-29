import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigation = useNavigation();
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      {
        navigation.state === "loading" ? <span className="block loading loading-spinner text-primary loading-lg min-h-screen mx-auto"></span> : <Outlet></Outlet>
       }
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Slide
      />
    </div>
  );
}

export default App;
