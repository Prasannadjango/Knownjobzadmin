import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import "../src/Assests/Styles/Main.css";
import "../src/Assests/Styles/Bootstrap5.css";
function App() {
  return (
    <React.Fragment>
      <ProSidebarProvider>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </ProSidebarProvider>
    </React.Fragment>
  );
}

export default App;
