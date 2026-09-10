import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/Landing";
import { SobrePage } from "./pages/Sobre";
import { PrecosPage } from "./pages/Precos";
import { PrivacidadePage } from "./pages/Privacidade";
import { NotFoundPage } from "./pages/NotFound";
import { LoginPage } from "./app/LoginPage";
import { RequireStore } from "./app/RequireStore";
import { DashboardPage } from "./app/DashboardPage";
import { EstoquePage } from "./app/EstoquePage";
import { AlertasPage } from "./app/AlertasPage";
import { OfertasPage } from "./app/OfertasPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sobre" element={<SobrePage />} />
      <Route path="/precos" element={<PrecosPage />} />
      <Route path="/privacidade" element={<PrivacidadePage />} />
      <Route path="/demo" element={<Navigate to="/app" replace />} />
      <Route path="/app" element={<LoginPage />} />
      <Route element={<RequireStore />}>
        <Route path="/app/dashboard" element={<DashboardPage />} />
        <Route path="/app/estoque" element={<EstoquePage />} />
        <Route path="/app/alertas" element={<AlertasPage />} />
        <Route path="/app/ofertas" element={<OfertasPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
