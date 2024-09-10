import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);

