import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./mainContainer/screens/home";
import Navbar from "./mainContainer/components/header/header";
import About from "./mainContainer/screens/trade";
import Contact from "./mainContainer/screens/contact";
import { PublicRoutes } from "./mainContainer/routes/appRoutes";
import NotFound from "./mainContainer/screens/notFoundPage";
import MainLayout from "./mainContainer/components/mainLayout/mainLayout";
import '../src/mainContainer/style/appStyle.less'

const App = (props: any) => {
  return (
    <Router>
      {/* Main layout */}
      <MainLayout>
        <Routes>
          {/* Public Routes */}
          {PublicRoutes?.map((route: any) => (
            <Route path={route.path} element={route.component} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
