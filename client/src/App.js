import {createBrowserRouter,RouterProvider, Outlet,} from "react-router-dom"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styles from "./styles/app.module.scss"
const Layout = () =>{
  return(
    <>
    <Navbar />
    <Outlet/>
    <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>
      },
      {
      path:"/post/:id",
      element:<Single />
      },
      {
        path:"/write",
        element:<Write/>
      } 
  ]
  },{
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/single",
    element: <Login/>
  },
]);
function App() {
  return (
    <div className={styles.app}>
    <div className={styles.container}>
      <RouterProvider router={router} />
    </div>
    </div>
  );
}

export default App;
