import { gql } from "graphql-request";

export const PAGES = gql`
  query PageQuery($id: ID!) {
    page(id: $id, idType: URI) {
      title(format: RENDERED)
      content(format: RENDERED)
    }
  }
`;
