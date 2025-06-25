import { gql } from "graphql-request";

export const TEAM = gql`
  query MemberQuery {
    membros {
      nodes {
        id
        categories {
          nodes {
            slug
          }
        }
        title
        info {
          e_mail
          socialMedias {
            socialMediaName
            socialMediaURL
          }
        }
        content
        featuredImage {
          node {
            filePath
            guid
          }
        }
      }
    }
  }
`;

export const TRANSCRIBER_PHOTO = gql`
  query TranscriberPhotoQuery($id: ID!) {
    membro(id: $id, idType: SLUG) {
      slug
      featuredImage {
        node {
          filePath
          guid
        }
      }
    }
  }
`;
