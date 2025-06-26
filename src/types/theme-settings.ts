export type headerThemeTypes = {
  norairoTheme: {
    norairoThemeSettings: {
      logo: {
        node: {
          altText: string;
          guid: string;
        };
      };
      darkLogo: {
        node: {
          altText: string;
          guid: string;
        };
      };
    };
  };
};

export type sectionOneDetails = {
  text: string;
  value: string;
};

export type homePageThemeTypes = {
  norairoTheme: {
    norairoThemeSettings: {
      bannerImage: {
        node: {
          guid: string;
        };
      };
      bannerTitle: string;
      bannerDescription: string;
      presentationTitle: string;
      presentationText: string;
      titleSectionOne: string;
      subtitleSectionOne: string;
      sectionOneDetails: sectionOneDetails[];
      titleSectionTwo: string;
      textSectionTwo: string;
      sectionTwoImageOne: {
        node: {
          guid: string;
        };
      };
      sectionTwoImageTwo: {
        node: {
          guid: string;
        };
      };
      cpnqLogo: {
        node: {
          guid: string;
        };
      };
    };
  };
};

export type footerThemeTypes = {
  norairoTheme: {
    norairoThemeSettings: {
      footerLogo: {
        node: {
          guid: string;
        };
      };
      privacyPolicy: string;
    };
  };
};