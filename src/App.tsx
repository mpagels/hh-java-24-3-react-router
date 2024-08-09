
import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import Courses from "./pages/Courses.tsx";
import CoursesDetailPage from "./pages/CoursesDetailPage.tsx";
import NavigationComponent from "./pages/NaviationComponent.tsx";

function App() {

  return (
    <>
        <div>
            <Link to={"/"}>Home2</Link> |
            <Link to={"/courses"}>Courses</Link> |
            <Link to={"/navigation-example"}>Navigation Example</Link>
        </div>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/courses"} element={<Courses />} />
          <Route path={"/courses/:currywurst"} element={<CoursesDetailPage />} />
          <Route path={"/navigation-example"} element={<NavigationComponent />} />
      </Routes>
    </>
  )
}

export default App
