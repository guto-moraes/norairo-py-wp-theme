import { gql } from "graphql-request";

export const ALL_ARTICLES_BLOG = gql`
  query BlogQuery($per_page: Int, $offset: Int) {
    posts(
      where: {
        categoryName: "blog"
        offsetPagination: { size: $per_page, offset: $offset }
      }
    ) {
      pageInfo {
        offsetPagination {
          hasMore
          hasPrevious
          total
        }
      }
      nodes {
        slug
        date
        title(format: RENDERED)
        excerpt(format: RENDERED)
      }
    }
  }
`;

export const ARTICLE_BY = gql`
  query ArticleBy($id: ID!) {
    post(id: $id, idType: SLUG) {
      id
      slug
      title(format: RENDERED)
      content(format: RENDERED)
      featuredImage {
        node {
          guid
        }
      }
    }
  }
`;
