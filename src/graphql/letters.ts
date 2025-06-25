import { gql } from "graphql-request";

export const SEARCH_LETTERS = gql`
  query LetterQuery($per_page: Int, $offset: Int, $searchQuery: String!) {
    oficios(
      where: {
        search: $searchQuery
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
        id
        databaseId
        slug
        title(format: RENDERED)
        date
        categories {
          nodes {
            name
            slug
          }
        }
        details {
          briefDescription
          originalFileAuthor
          originalfilecreatedat
          transcriber
          transcriptionFileLink {
            node {
              fileSize
              guid
              mediaDetails {
                sizes {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const SINGLE_LETTER = gql`
  query OficioBySlugQuery($id: ID!) {
    oficio(id: $id, idType: SLUG) {
      id
      title
      categories {
        nodes {
          name
          slug
        }
      }
      date
      details {
        briefDescription
        originalFileAuthor
        originalfilecreatedat
        originalFileLink
        transcriber
        transcriptionFileLink {
          node {
            guid
            fileSize
          }
        }
      }
    }
  }
`;

export const LETTERS_BY_CATEGORY = gql`
  query LettersByCategoryQuery($per_page: Int, $offset: Int, $slug: String!) {
    oficios(
      where: {
        categoryName: $slug
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
        id
        databaseId
        slug
        title(format: RENDERED)
        date
        categories {
          nodes {
            name
            slug
          }
        }
        details {
          briefDescription
          originalFileAuthor
          originalfilecreatedat
          transcriber
          transcriptionFileLink {
            node {
              fileSize
              guid
              mediaDetails {
                sizes {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const TOTAL_LETTERS = gql`
  query TotalLettersQuery {
    oficios {
      pageInfo {
        offsetPagination {
          total
        }
      }
    }
  }
`;
