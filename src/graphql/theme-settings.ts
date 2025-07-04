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
        cpnqUrl
        cpnqLogo {
          node {
            altText
            guid
          }
        }
        darkLogoCpnq {
          node {
            altText
            guid
          }
        }
        ifmtJuinaUrl
        ifmtJuinaLogo {
          node {
            altText
            guid
          }
        }
        darkLogoIfmtJuina {
          node {
            altText
            guid
          }
        }
        apmtUrl
        apmtLogo {
          node {
            altText
            guid
          }
        }
        darkLogoApmt {
          node {
            altText
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

export const CONTACT_PAGE_TEXT = gql`
  query ContactQuery {
    norairoTheme {
      norairoThemeSettings {
        contactText
      }
    }
  }
`;
