import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./routes";
import { AppThemeProvider } from "./shared/contexts/";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppThemeProvider>
  );
}
