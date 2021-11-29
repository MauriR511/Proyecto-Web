import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './pages/Login/Login';
import User from './pages/User/User';
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Admin from "./pages/Admin/Admin";
import Error from "./pages/Error/Error";
import Redirect from "./pages/Redirect/Redirect";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route
          path="/user"
          element={
            <RequireAuth role="user">
              <User />
            </RequireAuth>
          } />
        <Route
          path="/admin"
          element={
            <RequireAuth role="admin">
              <Admin />
            </RequireAuth>
          } />
        <Route path="/*" element={ 
        <div>
            <main>
              <form>
                <h1>404</h1> <h3>Sorry, the page not found</h3>
                <p> The page you requested could not be found </p>
                <img
                  src="https://www.wallpaperup.com/uploads/wallpapers/2014/09/25/455955/45cc249825d1d76d509d0aa81a67adb5.jpg"
                  alt="error" width="500" height="600" />
              </form>
            </main>
          </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
