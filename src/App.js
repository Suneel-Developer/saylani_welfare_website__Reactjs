import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader/TopHeader";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Branches from "./pages/Contact/Branches";
import News from "./pages/News/News";
import SinglePage from "./pages/singlePage/SinglePage";
import Contact from "./pages/Contact/Contact";
import BankDetails from "./pages/Bankdetails";
import Subscribebox from "./components/SubscribeBox/SubscribeBox";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/bankdetails" element={<BankDetails />} />
        <Route path="/singlepage" element={<SinglePage />} />
      </Routes>
      <Subscribebox />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
