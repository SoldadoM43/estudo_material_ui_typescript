import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes";

import './Themes/styles.css'

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
