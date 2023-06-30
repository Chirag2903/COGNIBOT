import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from './component/Home/Home';
import LoginPage from './component/LoginPage';
import RegisterPage from './component/RegisterPage';
import Header from "./component/Header/Header";
import Summary from "./component/Summary"
import Paragraph from './component/Paragraph';
import Chatbot from "./component/Chatbot.js"
import PyConverter from "./component/PyConverter.js"
import Image from "./component/Image.js"
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <Router>
      <Header />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/summary' element={<ProtectedRoute Component={Summary} />} />
        <Route path='/paragraph' element={<ProtectedRoute Component={Paragraph} />} />
        <Route path='/chatbot' element={<ProtectedRoute Component={Chatbot} />} />
        <Route path='/code-converter' element={<ProtectedRoute Component={PyConverter} />} />
        <Route path='/image-generate' element={<ProtectedRoute Component={Image} />} />
      </Routes>
    </Router>
  )
}

export default App;
