import { gql } from "graphql-request";

export const MAIN_MENU = gql`
query MainMenuQuery {
	menus(where: { slug: "principal" } ) {
    nodes {
      menuItems {
        nodes {
          parentDatabaseId
          databaseId
          label
          uri
          parentId
          childItems {
            nodes {
              parentDatabaseId
              databaseId
              label
              uri
            }
          }
        }
      }
    }
  }  
}
`;

export const FOOTER_MENU = gql`
  query FooterMenuQuery {
    menuItems(where: { location: FOOTER }) {
      nodes {
        id
        label
        uri
      }
    }
  }
`;