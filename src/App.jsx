import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Context>
          <AppRoutes />
        </Context >
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
