import { gql } from "graphql-request";

export const MAIN_MENU = gql`
  query MainMenuQuery {
    menuItems(where: { location: MAIN }) {
      nodes {
        key: id
        parentId
        label
        uri
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


export const MainMenu = gql`
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
