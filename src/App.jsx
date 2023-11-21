import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";

import Home from "./routers/Home";
import About from "./routers/About";
import Weather from "./routers/Weather";
import Date from "./routers/Date";

function App() {
  return (
    <>
      <h1>リアクトRouterテスト</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
        <li>
          <Link to="/date">Date</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/date" element={<Date />} />
      </Routes>
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Navigation />}>
    //       <Route index element={<Home />} />
    //       <Route path="weather" element={<Weather />} />
    //       <Route path="dashboard" element={<Dashboard />} />
    //       <Route path="*" element={<NoMatch />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
