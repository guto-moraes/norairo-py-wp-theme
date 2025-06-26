import { useParams } from "react-router";
import Main from "@/layouts/Main";
import Title from "@/components/Title";
import Article from "@/components/Article";
import DataLoading from "@/components/DataLoading";
import Errors from "@/components/Errors";
import { useArticle } from "@/queries/blog";
import Container from "@/layouts/Container";

const BlogArticle = () => {
  const { slug = "" } = useParams();

  const { data, isLoading, isError, error } = useArticle(slug);

  if (isLoading) return <DataLoading />;
  if (isError) return <Errors message={error.message} />;

  return (
    <Main className="py-10 xl:py-16">
      <Container className="w-full max-w-screen xl:max-w-5xl">
        {data && (
          <>
            <Title title={data.post.title} />
            <Article content={data.post.content} />
          </>
        )}
      </Container>
    </Main>
  );
};

export default BlogArticle;
