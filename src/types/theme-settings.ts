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
cpnqUrl: string;
      cpnqLogo: {
        node: {
          altText: string;
          guid: string;
        };
      };
      darkLogoCpnq: {
        node: {
          altText: string;
          guid: string;
        };
      };
      ifmtJuinaUrl: string;
      ifmtJuinaLogo: {
        node: {
          altText: string;
          guid: string;
        };
      };
      darkLogoIfmtJuina: {
        node: {
          altText: string;
          guid: string;
        };
      };
      apmtUrl: string;
      apmtLogo: {
        node: {
          altText: string;
          guid: string;
        };
      };
      darkLogoApmt: {
        node: {
          altText: string;
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

export type contatcPageText = {
  norairoTheme: {
    norairoThemeSettings: {
      contactText: string;
    };
  };
};
