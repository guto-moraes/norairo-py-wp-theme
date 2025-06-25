import { Routes, Route } from "react-router";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
};

export default App;
