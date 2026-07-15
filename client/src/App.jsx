import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NewPlan from "./pages/Plans/NewPlan";
import SuggestedNutrition from "./pages/Plans/SuggestedNutrition";
import UserData from "./pages/User/UserData";

function App() {
  return (
    <Routes>

      {/* Public Pages */}
      <Route
        path="/"
        element={
          <PublicLayout>
            <LandingPage />
          </PublicLayout>
        }
      />

      <Route
        path="/login"
        element={
          <PublicLayout>
            <Login />
          </PublicLayout>
        }
      />

      <Route
        path="/register"
        element={
          <PublicLayout>
            <Register />
          </PublicLayout>
        }
      />

      {/* Dashboard Pages */}
      <Route path="/home" element={<Home />} />
      <Route path="/plans/new" element={<NewPlan />} />
      <Route path="/plans/suggested" element={<SuggestedNutrition />} />
      <Route path="/profile" element={<UserData />} />

    </Routes>
  );
}

export default App;