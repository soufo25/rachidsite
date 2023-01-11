import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Courses from "./Pages/Courses/Courses";
import Products from "./Pages/Products/Products";
import Shops from "./Pages/Shops/Shops";
import MyStory from "./Pages/MyStory/MyStory";


const Layout = () => {
  return (
    <div className="app">
    <Navbar/>
      <Outlet/>
    <Footer/>
    </div>
  );
}


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/courses",
          element: <Courses/>
        },
        {
          path: "/mystory",
          element: <MyStory/>
        },
        {path:"/shops",
         element: <Shops/>
        },
        {
          path: "/products",
          element: <Products/>
        }
   ]}
  ])

  return (
    <div >
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
