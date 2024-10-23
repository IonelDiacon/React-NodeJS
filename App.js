import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";




import Webapp from "Webapp";
import Arduino from 'C:/Users/pc/Desktop/projectss/mini facebook/readyProject/mern-social-media-master/client/src/routes/ArduinoPage.js'
import RasberyPy from './routes/RasberyPyPage.js'
import About1 from 'C:/Users/pc/Desktop/projectss/mini facebook/readyProject/mern-social-media-master/client/src/components001/PageWork1/pages/About1.jsx';
import About from 'C:/Users/pc/Desktop/projectss/mini facebook/readyProject/mern-social-media-master/client/src/components001/PageWork/pages/About.jsx';
import AboutRasberyPy1 from 'C:/Users/pc/Desktop/projectss/mini facebook/readyProject/mern-social-media-master/client/src/components001/PageWorkrasberyPy1/pages/About1.jsx';
import AboutRasberyPy from "C:/Users/pc/Desktop/projectss/mini facebook/readyProject/mern-social-media-master/client/src/components001/PageWorkrasberyPy/pages/About1.jsx"
import CloudPage from 'C:/Users/pc/Desktop/projectss/mini facebook/readyProject/mern-social-media-master/client/src/routes/CloudPage.js'
import ContactPage from 'C:/Users/pc/Desktop/projectss/mini facebook/readyProject/mern-social-media-master/client/src/routes/ContactPage.js'




function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
             <Route path='/webapp' element={<Webapp />} />
             <Route path='/arduino' element={<Arduino />} />
             <Route path='/rasberyPy' element={<RasberyPy />} />
             <Route path="/about1" element={<About1 />} />
             <Route path="/project1" element={<About />} />
             <Route path="/aboutRasberyPy1" element={<AboutRasberyPy1 />} />
             <Route path="/aboutRasberyPy" element={<AboutRasberyPy />} />
             <Route path='/cloud' element={<CloudPage />} />
             <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
