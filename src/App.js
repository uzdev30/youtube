import "./App.css";
import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Main, Channel, Video, Search, Navbar } from "./components";
function App() {
  return (
    <Box className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
}

export default App;
