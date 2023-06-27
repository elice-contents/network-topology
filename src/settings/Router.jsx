import { createHashRouter as createRouter } from "react-router-dom";
import Root from "../pages/Root";
import Free from "../pages/Free";
import Home from "../pages/Home";
import { FreeContextProvider } from "./FreeContext";
import { HomeContextProvider } from "./HomeContext";

const router = createRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: (
          <HomeContextProvider>
            <Home />
          </HomeContextProvider>
        ),
      },
      {
        path: "free",
        element: (
          <FreeContextProvider>
            <Free />
          </FreeContextProvider>
        ),
      },
    ],
  },
]);

export default router;
