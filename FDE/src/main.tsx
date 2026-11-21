import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import { initSmoothScroll } from "./motion";
import Layout from "./components/Layout";
import { LangProvider } from "./i18n";
import Home from "./pages/Home";
import { About, Business, Consultation, HowWeWork, IndustryPage, Leaders, NotFound, Security } from "./pages/Pages";
import { OldCaseRedirect } from "./pages/Case";

initSmoothScroll();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/how-we-work/cases/:slug" element={<OldCaseRedirect />} />
          <Route path="/cases/:slug" element={<OldCaseRedirect />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </LangProvider>
  </React.StrictMode>
);
