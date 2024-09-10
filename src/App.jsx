import { Box } from '@mui/material';
import Layout from './layouts/Layout';
import { Outlet, useLocation } from 'react-router-dom';

// Components
import { MainPage } from './components/pages';


// tools

import { HelmetProvider } from "react-helmet-async"

const App = () => {

  const Location = useLocation();

  return (
    <HelmetProvider>
      <Box sx={{ height: "100vh" }}>
        <Layout>
          {
            Location.pathname === "/" ? <MainPage /> : <Outlet />
          }
        </Layout>
      </Box>
    </HelmetProvider>
  )
}

export default App;