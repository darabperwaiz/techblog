import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import DetailPage from "./pages/detailPage/DetailPage";
import Footer from "./components/Footer/Footer";
import Admin from "./pages/admin/Admin";
import Dashboard from "./admin/dashboard/Dashboard";
import CreatePost from "./admin/createPost/CreatePost";
import AdminPosts from "./admin/Admin_Posts/AdminPosts";
import { UserProvider } from "./PostContext/UserContext";
import EditPage from "./pages/editpage/EditPage";
import SearchPage from "./pages/searchPage/SearchPage";
import Login from "./pages/Login/Login";
import { useState } from "react";
import Aboutus from "./pages/aboutus/Aboutus";
import Contactus from "./pages/contactus/Contactus";


const PrivateRoute = ({children}) => {
  const token = localStorage.getItem('token')
  console.log(token)
  if(!token) return <Navigate to="/login" replace={true} />
  
  return children
}

const ProtectLogin = ({children}) => {
  const token = localStorage.getItem('token')
  if(token) return <Navigate to='/' replace={true} />
  return children
}

const router = createBrowserRouter([
  {
    path: '/', element: <Navbar />,
    children: [
      {
        index: true, element: <Home />
      },
      {
        path: 'post/:slug', element: <DetailPage />
      },
      {
        path: 'search', element: <SearchPage />
      },
      {
        path: 'login', element: (<ProtectLogin><Login /></ProtectLogin>)
      },
      {
        path: 'aboutus', element: <Aboutus />
      },
      {
        path: 'contactus', element: <Contactus />
      }
    ]
  },
  {
    path: '/', element: <Footer />
  },
  {
    path: '/admin', element:(<PrivateRoute> <Admin /></PrivateRoute> ),
    children: [
      {
        path: 'create-post', element: <CreatePost /> 
      },
      {
        path: 'dashboard', element: <Dashboard />
      },
      {
        path: 'posts', element: <AdminPosts />
      },
      {
        path: 'posts/edit-post/:id', element: <EditPage />
      }
    ]
  }


]) 

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <UserProvider>
      <div className="App">
      <RouterProvider router={router} />
    </div>
    </UserProvider>
    
  );
}

export default App;
