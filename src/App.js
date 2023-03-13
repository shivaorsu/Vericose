import { useState, useEffect, Fragment } from "react";

//import "./media-query.css";
//import Home from "./Components/Admin/Pages/Home";
import HomeAdmin from "./Components/Admin/Pages/Home";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detail from "./Components/Admin/Pages/Details";
import AddEditBlog from "./Components/Admin/Pages/AddEditBlog";
import About from "./Components/Admin/Pages/About";
import NotFound from "./Components/Admin/Pages/NotFound";
import Header from "./Components/Admin/Headeradmin";
import Auth from "./Components/Admin/Pages/Auth";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import TagBlog from "./Components/Admin/Pages/TagBlog";
import CategoryBlog from "./Components/Admin/Pages/CategoryBlog";
//import ScrollToTop from "./Components/Admin/ScrollToTop";
import Blogs from "./Components/Admin/Pages/Blog";
import HomeUser from "./Components/home";
import Service from "./Components/service";
import Contact from "./Components/contact";
import Blog from "./Components/blog";
import Glue from "./Components/glue";
import Appointment from "./Components/appointment";
import Admin from "./Components/Admin/admin";
import Post from "./Components/Admin/post";
import AboutUser from "./Components/about";

function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    });
  };
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/about" element={<AboutUser />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/glue" element={<Glue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-an-appointment" element={<Appointment />} />
        {/* <Route path="/homeadmin" element={<HomeAdmin />} /> */}
        {/* <Route path="/home" exact>
          <HomeUser />
        </Route>
        <Route path="/about">
          <AboutUser />
        </Route>
        <Route path="/services">
          <Service />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/glue-treatment">
          <Glue />
        </Route>
        <Route path="/book-an-appointment">
          <Appointment />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/post">
          <Post />
        </Route> */}
      </Routes>
    </Fragment>
  );
}

export default App;

// function App() {
//   const [active, setActive] = useState("home");
//   const [user, setUser] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         setUser(authUser);
//       } else {
//         setUser(null);
//       }
//     });
//   }, []);

//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       setUser(null);
//       setActive("login");
//       navigate("/auth");
//     });
//   };

//   return (
//     <div className="App">

//       <Routes>
//         <Route
//           path="/"
//           element={<Home setActive={setActive} active={active} user={user} />}
//         />
//         <Route
//           path="/search"
//           element={<Home setActive={setActive} user={user} />}
//         />
//         <Route
//           path="/detail/:id"
//           element={<Detail setActive={setActive} user={user} />}
//         />
//         <Route
//           path="/create"
//           element={
//             user?.uid ? <AddEditBlog user={user} /> : <Navigate to="/" />
//           }
//         />
//         <Route
//           path="/update/:id"
//           element={
//             user?.uid ? (
//               <AddEditBlog user={user} setActive={setActive} />
//             ) : (
//               <Navigate to="/home" />
//             )
//           }
//         />
//         <Route path="/blogs" element={<Blogs setActive={setActive} />} />
//         <Route path="/tag/:tag" element={<TagBlog setActive={setActive} />} />
//         <Route path="/category/:category" element={<CategoryBlog setActive={setActive}  />} />
//         <Route path="/about" element={<About />} />
//         
//         <Route
//           path="/auth"
//           element={<Auth setActive={setActive} setUser={setUser} />}
//         />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
