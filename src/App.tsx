import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Redux from "./pages/redux";
import RxJS from "./pages/rxjs";
import Navbar from "./ui/Navbar";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/rxjs" element={<RxJS />} />
      </Routes>
    </>
  );
}

export default App;
