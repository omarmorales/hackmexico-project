import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './views/Home';
import { CssBaseline } from '@mui/material';
import noeLogo from './assets/noe-logo.png';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Router>
        <AppBar position="static">
          <Toolbar>
            {isMobile && (
              <>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={handleDrawerToggle}
                >
                  <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}
                  >
                    {/* <Button onClick={() => navigate('/')}>Home</Button> */}
                    {/* <Button onClick={() => navigate('/about')}>About</Button> */}
                  </Box>
                </Drawer>
              </>
            )}
            <img src={noeLogo} alt="Noe Logo" style={{ height: '50px', verticalAlign: 'middle', marginRight: 'auto' }} />
            {!isMobile && (
              <>
                {/* <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                <Button color="inherit" onClick={() => navigate('/about')}>About</Button> */}
              </>
            )}
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ p: 3 }}>
          <Routes>
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App