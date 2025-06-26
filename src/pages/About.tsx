import Main from "@/layouts/Main";
import Container from "@/layouts/Container";
import Article from "@/components/Article";
import DataLoading from "@/components/DataLoading";
import Errors from "@/components/Errors";
import Title from "@/components/Title";
import { useQueryPage } from "@/queries/pages";
import { useLocation } from "react-router";

const About = () => {
  const { pathname } = useLocation();
  const slug = pathname.split("/")[2];

  const { data, isLoading, isError, error } = useQueryPage(slug);

  if (isLoading) return <DataLoading />;
  if (isError) return <Errors message={error.message} />;

  return (
    <Main className="py-10 xl:py-16">
      <Container className="w-full max-w-screen xl:max-w-5xl">
        {data && (
          <>
            <Title title={data.page.title} className="uppercase" />
            <Article content={data.page.content} />
          </>
        )}
      </Container>
    </Main>
  );
};

export default About;
