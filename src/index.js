import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter } from "react-router-dom";
import { ContactsProvider } from "./contexts/ContactsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <UserProvider>
        <ContactsProvider>
          <App />
        </ContactsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
