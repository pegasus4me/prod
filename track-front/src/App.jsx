import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthCheckPoint from "./infrastructure/actions/hoc";
import Navbar from "./infrastructure/components/default/navbar";
import Register from "./presentation/authentification/register/register";
import Login from  "./presentation/authentification/login/login"
import Tasks from "./presentation/task/tasks";
import Dashboard from "./presentation/dashboard/dashboard";
import Profile from "./presentation/profile/profile";
import Footer from "./infrastructure/components/default/footer";
import UpdateProfile from "./presentation/profile/update/profile";
import UpdatePassword from './presentation/profile/update/password';
import "./tailwind.css";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" Component={AuthCheckPoint(Tasks)} />
      <Route exact path="/dashboard" Component={AuthCheckPoint(Dashboard)} />
      <Route exact path="/Profile" Component={AuthCheckPoint(Profile)}/>
      <Route exact path="/Profile/update" Component={AuthCheckPoint(UpdateProfile)}/>
      <Route exact path="/Profile/updatePassword" Component={AuthCheckPoint(UpdatePassword)} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;