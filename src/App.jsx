import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AppLayout from "./pages/AppLayout/AppLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CityList from "./components/CityList/CityList";
import CountryList from "./components/CountryList/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";

const BASE_URL = "http://localhost:8000";

function App() {
  const [visitedCities, setVisitedCities] = useState([]);
  const [upCommingCities, setUpcommingCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setVisitedCities(data.filter((visitedCity) => visitedCity.visited));
        setUpcommingCities(
          data.filter((upCommingCity) => !upCommingCity.visited),
        );
      } catch {
        alert("There was an error in loading data...");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="demo-app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="visited-cities" />} />
          <Route
            path="visited-cities"
            element={<CityList cities={visitedCities} isLoading={isLoading} />}
          />
          <Route path="visited-cities/:id" element={<City />} />
          <Route
            path="visited-countries"
            element={
              <CountryList cities={visitedCities} isLoading={isLoading} />
            }
          />
          <Route
            path="upcomming-cities"
            element={
              <CityList
                cities={upCommingCities}
                isLoading={isLoading}
                color="#ffb545"
              />
            }
          />
          <Route
            path="upcomming-countries"
            element={
              <CountryList
                cities={upCommingCities}
                isLoading={isLoading}
                color="#ffb545"
              />
            }
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
