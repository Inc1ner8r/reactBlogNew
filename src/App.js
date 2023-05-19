import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  Navigate,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import New from "./pages/newBlog/New";
import EditBlog from "./pages/editBlog/EditBlog";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<Home />} />,
      <Route path="/myBlogs/:id" element={<Profile />} />,
      <Route path="/login" element={<Login />} />,
      <Route path="/register" element={<Register />} />,
      <Route path="/new" element={<New />} />,
      <Route path="/edit" element={<EditBlog />} />,
    ])
  );
  return <RouterProvider router={router} />;
}

export default App;
