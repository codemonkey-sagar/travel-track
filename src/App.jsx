import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AppLayout from "./pages/AppLayout/AppLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>List of cities goes here</p>} />
          <Route
            path="visited-cities"
            element={<p>List of Visited Cities</p>}
          />
          <Route
            path="visited-countries"
            element={<p>List of Visited Countries</p>}
          />
          <Route
            path="upcomming-cities"
            element={<p>List of Upcomming Cities</p>}
          />
          <Route
            path="upcomming-countries"
            element={<p>List of Upcomming Countries</p>}
          />
          <Route path="form" element={<p>Forms</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
