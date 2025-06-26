import { Routes, Route } from "react-router";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Thanks from "@/pages/Thanks";
import Contact from "@/pages/Contact";
import Letters from "@/pages/Letters";
import LettersByCategory from "@/pages/LettersByCategory";
import SingleLetter from "@/pages/SingleLetter";
import Blog from "@/pages/Blog";
import BlogArticle from "@/pages/BlogArticle";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="o-projeto">
        <Route path="apresentacao" element={<About />} />
        <Route path="equipe-de-trabalho" element={<Team />} />
        <Route path="agradecimentos" element={<Thanks />} />
      </Route>
      <Route path="oficios" element={<Letters />} />
      <Route path="oficio/:slug" element={<SingleLetter />} />
      <Route path="categoria/:category" element={<LettersByCategory />} />
      <Route path="blog">
        <Route index  element={<Blog />} />
        <Route path=":slug"  element={<BlogArticle />} />
      </Route>
      <Route path="contato" element={<Contact />} />
    </Routes>
  );
};

export default App;
