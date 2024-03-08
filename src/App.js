import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Contact,
  Footer,
  Header,
  Home,
  Login,
  Register,
  Reset,
} from "./components/pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
