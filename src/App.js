import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./scenes/dashboard"
import  Sidebar  from "./scenes/global/Sidebar";
import Drivers from "./scenes/drivers";
import Vehicles from "./scenes/vehicles";
import Chargers from "./scenes/chargers";
import Schedules from "./scenes/schedules";
import Reports from "./scenes/reports";
import Admin from "./scenes/admin"

function App() {
  const [theme,colorMode] = useMode();
  const [isSidebar] = useState(true);

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app">
      <Sidebar isSidebar={isSidebar}/>
      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/chargers" element={<Chargers />} />
          <Route path="/drivers" element={<Drivers/>}/>
          <Route path="/schedules" element={<Schedules/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/admin" element={<Admin/>}/>

        </Routes>
      </main>
    </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  )

}

export default App;
