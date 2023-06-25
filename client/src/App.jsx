import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from './context/AuthContext';
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx';
import CarsPages from "./pages/CarsPages.jsx";
import CarFormPage from "./pages/CarFormPage.jsx";
import HomePages from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx"
import ProtectedRoute from "./ProtectedRoute.jsx"
import { CarProvider } from "./context/CarsContext.jsx";
import Navbar from "./components/navbar";

function App(){
  return(
    <AuthProvider>
      <CarProvider>
      <BrowserRouter>
      <main className="container mx-auto px-10">
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePages />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>

      <Route element={<ProtectedRoute/>}>
        <Route path="/cars" element={<CarsPages />}></Route>
        <Route path="/add-car" element={<CarFormPage />}></Route>
        <Route path="/cars/:id" element={<CarFormPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Route>
    </Routes>
      </main>
    </BrowserRouter>
      </CarProvider>
    </AuthProvider>
  )
}

export default App;