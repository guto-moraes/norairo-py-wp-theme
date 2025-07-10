import { useQueryState } from "nuqs";
import { Link } from "react-router";
import Main from "@/layouts/Main";
import Container from "@/layouts/Container";
import Errors from "@/components/Errors";
import DataLoading from "@/components/DataLoading";
import Title from "@/components/Title";
import Pagination from "@/components/Pagination";
import { brazilianFormatDate } from "@/utils/formatDate";
import type { articleTypes } from "@/types/article";
import { useQueryBlog } from "@/queries/blog";
import cn from "@/utils/cn";

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
const LIMIT = 10; // Number of posts to fetch per request

const Blog = () => {
  const [offset, setOffset] = useQueryState("offset");

  const { data, isLoading, isError, error } = useQueryBlog(
    LIMIT,
    offset ? Number(offset) : 0
  );

  const pages = Math.ceil(
    (data?.posts.pageInfo.offsetPagination.total ?? 0) / LIMIT
  );

  const handlePagination = (page: number) => {
    setOffset(String(Number((page - 1) * LIMIT)));
  };

  if (isLoading) return <DataLoading />;
  if (isError) return <Errors message={error.message} />;

  return (
    <Main className="py-10 xl:py-16 h-full">
      <Container className="max-w-5xl">
        <Title title="Blog" className="uppercase" />
        {data && (
          <section className="flex flex-col gap-8 mb-8">
            {data.posts.nodes.map((post: articleTypes) => {
              return (
                <div
                  key={Math.random()}
                  className={cn(
                    "border-l-4 shadow-md hover:shadow-xl border-primary-500 dark:border-amber-300 rounded-xs",
                    "transition-all duration-300 bg-white dark:bg-[#1c1e26] p-4 w-full flex flex-col"
                  )}
                >
                  <span className="text-xs text-secondary-700 dark:text-white dark:opacity-70 font-medium">
                    {brazilianFormatDate(post.date)}
                  </span>
                  <Link
                    className={cn(
                      "leading-6 text-2xl text-primary-700 dark:text-sky-400 font-bold",
                      "hover:text-secondary-600 transition-colors duration-300"
                    )}
                    to={`./${post.slug}`}
                    title={`Ler o artigo ${post.title}`}
                  >
                    {post.title}
                  </Link>
                  <p
                    className="text-sm text-secondary-800 dark:text-white mt-1.5 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                </div>
              );
            })}
          </section>
        )}
        {data && pages > 1 && (
          <Pagination
            hasPrevious={data.posts.pageInfo.offsetPagination.hasPrevious}
            hasNext={data.posts.pageInfo.offsetPagination.hasMore}
            offset={Number(offset)}
            total={data.posts.pageInfo.offsetPagination.total}
            limit={LIMIT}
            maxItems={MAX_ITEMS}
            maxLeft={MAX_LEFT}
            handlePagination={handlePagination}
          />
        )}
      </Container>
    </Main>
  );
};

export default Blog;
