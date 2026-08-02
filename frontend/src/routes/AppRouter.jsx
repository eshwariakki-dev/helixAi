import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import IncidentManagement from "../pages/IncidentManagement";
import IncidentDetails from "../pages/IncidentDetails";
import Upload from "../pages/Upload";
import DecisionCenter from "../pages/DecisionCenter";
import RippleAnalysis from "../pages/RippleAnalysis";
import ChaosSimulation from "../pages/ChaosSimulation";
import Recommendations from "../pages/Recommendations";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/incidents"
            element={<IncidentManagement />}
          />

          <Route
            path="/incidents/:id"
            element={<IncidentDetails />}
          />

          <Route
            path="/upload"
            element={<Upload />}
          />

          <Route
            path="/decision-center"
            element={<DecisionCenter />}
          />

          <Route
            path="/ripple-analysis"
            element={<RippleAnalysis />}
          />

          <Route
            path="/chaos-simulation"
            element={<ChaosSimulation />}
          />

          <Route
            path="/recommendations"
            element={<Recommendations />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;