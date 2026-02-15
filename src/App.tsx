import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ONama from "./pages/ONama";
import Usluge from "./pages/Usluge";
import VozilaPage from "./pages/Vozila";
import Galerija from "./pages/Galerija";
import KontaktPage from "./pages/Kontakt";
import Katalog from "./pages/Katalog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/usluge" element={<Usluge />} />
          <Route path="/vozila" element={<VozilaPage />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/galerija" element={<Galerija />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
