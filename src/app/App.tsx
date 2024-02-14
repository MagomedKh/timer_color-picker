import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/ui/Layout/Layout";
import { PalettePage } from "../pages/PalettePage";
import { TimerPage } from "../pages/TimerPage";
import { store } from "../store/store";
import "./styles/App.scss";

function App() {
   return (
      <React.StrictMode>
         <BrowserRouter>
            <Provider store={store}>
               <Layout>
                  <Routes>
                     <Route path="/timer" element={<TimerPage />} />
                     <Route path="/palette" element={<PalettePage />} />

                     <Route path="*" element={<Navigate to="/timer" />} />
                  </Routes>
               </Layout>
            </Provider>
         </BrowserRouter>
      </React.StrictMode>
   );
}

export default App;
