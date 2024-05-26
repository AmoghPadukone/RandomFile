import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import MobileChatPage from "./components/Messaging/MobileMessaging/MobileChatPage.jsx";
import "./index.css";
import ErrorPage from "./routes/Errorpage.jsx";
import Home from "./routes/HomePage.jsx";
import LandingPage from "./routes/LandingPage.jsx";
import MobileMessagingPage from "./routes/MobileMessagingPage.jsx";
import { ProfilePage } from "./routes/ProfilePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,

    errorElement: <ErrorPage />,
  },
  {
    path: "/mobilemessages",
    element: <MobileMessagingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  // {
  //   path: "/profile",
  //   element: <ProfilePage />,
  // },
  {
    path: "/chat/:id",
    element: <MobileChatPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
