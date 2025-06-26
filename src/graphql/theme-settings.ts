import { gql } from "graphql-request";

export const HEADER_THEME = gql`
  query HeaderThemeQuery {
    norairoTheme {
      norairoThemeSettings {
        logo {
          node {
            altText
            guid
          }
        }
        darkLogo {
          node {
            altText
            guid
          }
        }
      }
    }
  }
`;

export const HOME_THEME = gql`
  query HomePageThemeQuery {
    norairoTheme {
      norairoThemeSettings {
        bannerImage {
          node {
            guid
          }
        }
        bannerTitle
        bannerDescription
        presentationTitle
        presentationText
        titleSectionOne
        subtitleSectionOne
        sectionOneDetails {
          text
          value
        }
        titleSectionTwo
        textSectionTwo
        sectionTwoImageOne {
          node {
            guid
          }
        }
        sectionTwoImageTwo {
          node {
            guid
          }
        }
        cpnqLogo {
          node {
            guid
          }
        }
      }
    }
  }
`;

export const FOOTER_THEME = gql`
  query FooterThemeQuery {
    norairoTheme {
      norairoThemeSettings {
        footerLogo {
          node {
            guid
          }
        }
        privacyPolicy
      }
    }
  }
`;
