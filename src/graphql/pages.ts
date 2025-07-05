import { gql } from "graphql-request";

export const PAGES = gql`
  query PageQuery($id: ID!) {
    page(id: $id, idType: URI) {
      databaseId
      uri
      title
      content
    }
  }
`;
