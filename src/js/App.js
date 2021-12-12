import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeService from "./components/HomeService.jsx";
import AboutService from "./components/AboutService.jsx";
import ContactService from "./components/ContactService.jsx";
import Sidebar from "./components/Sidebar.jsx";
function App() {
  return (
    <BrowserRouter>
    <Sidebar />
      <Route exact path="/" component={HomeService} />
      <Route path="/aboutme" component={AboutService} />
      <Route path="/contact" component={ContactService} />
    </BrowserRouter>
  );
}
export default App;
