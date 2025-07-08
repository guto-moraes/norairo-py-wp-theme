import { Routes, Route } from "react-router";
import Home from "@/pages/Home";
import Page from "@/pages/Page";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import Letters from "@/pages/Letters";
import LettersByCategory from "@/pages/LettersByCategory";
import SingleLetter from "@/pages/SingleLetter";
import Blog from "@/pages/Blog";
import BlogArticle from "@/pages/BlogArticle";
import NotFound from "@/pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="o-projeto">
        <Route path="equipe-de-trabalho" element={<Team />} />
        <Route path=":slug" element={<Page />} />
      </Route>
      <Route path="oficios">
        <Route index element={<Letters />} />
        <Route path="categoria/:category" element={<LettersByCategory />} />
      </Route>
      <Route path="oficio/:slug" element={<SingleLetter />} />
      <Route path="blog">
        <Route index  element={<Blog />} />
        <Route path=":slug"  element={<BlogArticle />} />
      </Route>
      <Route path="contato" element={<Contact />} />
      <Route path="politica-de-privacidade" element={<Contact />} />
      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
