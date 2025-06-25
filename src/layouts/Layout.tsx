import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Wrapper from "./Wrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
