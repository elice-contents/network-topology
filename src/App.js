import { RouterProvider } from "react-router-dom";

import GlobalStyle from "./settings/GlobalStyle";
import router from "./settings/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
