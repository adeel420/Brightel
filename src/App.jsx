import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import BlogPage from "./pages/BlogPage";
function Layout() {
  return (
    <>
      {" "}
      <Navbar /> <Outlet /> <Footer />{" "}
    </>
  );
}
export default function App() {
  return (
    <>
      {" "}
      <ScrollToTop />{" "}
      <Routes>
        {" "}
        {/* All routes that should show Navbar + Footer live under this layout */}{" "}
        <Route element={<Layout />}>
          {" "}
          <Route path="/" element={<Homepage />} />{" "}
          <Route path="/services/:slug" element={<ServicePage />} />{" "}
          <Route path="/contact" element={<ContactPage />} />{" "}
          {/* 404 that still shows Navbar/Footer */}{" "}
          <Route path="*" element={<div className="p-8">Not Found</div>} />{" "}
          <Route path="/blog/:slug" element={<BlogPage />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </>
  );
}
