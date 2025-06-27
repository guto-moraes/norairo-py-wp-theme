import { gql } from "graphql-request";

export const PAGES = gql`
  query PageQuery($id: ID!) {
    page(id: $id, idType: URI) {
      id
      databaseId
      title(format: RENDERED)
      content(format: RENDERED)
    }
  }
`;
