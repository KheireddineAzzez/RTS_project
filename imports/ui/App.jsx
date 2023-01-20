import React, { useState } from 'react';
import { Ultra_sound } from './Ultra_sound.jsx';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Componnent/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2/dist";
import {useSubscribe,useFind} from "meteor/react-meteor-data"
import {Arduino_uno}from "../api/Collections"
import {Topbar} from "./Componnent/TopBar";
import {Sidebar}  from "./Componnent/SideBar"
import {Dashboard} from "./Componnent/Dashboard";
export const App = () => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    const datarr = useSubscribe("Arduino_mega")
            const collection = useFind(() => {
                return  Arduino_uno.find({})


            })
    return (

        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Topbar setIsSidebar={setIsSidebar} />

                <div className="app">
                    <Sidebar isSidebar={isSidebar} />

                    <main className="content">
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Dashboard/>}>

                                </Route>
                            </Routes>
                        </BrowserRouter>

                    </main>

                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>


    );




}
