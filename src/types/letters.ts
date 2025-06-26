export type letterTypes = {
  id: string;
  databaseId: number;
  link: string;
  title: string;
  date: string;
  categories: {
    nodes: [
      {
        link: string;
        name: string;
        slug: string;
      }
    ];
  };
  details: {
    transcriber: string;
    originalFileAuthor: string;
    originalfilecreatedat: string;
    transcriptionFileLink: {
      node: {
        fileSize: number;
        guid: string;
        mediaDetails: {
          sizes: [
            {
              sourceUrl: string;
            }
          ];
        };
      };
    };
    briefDescription: string;
  };
};

export type TranscriberLetter = {
  title: string;
  featuredImage: {
    node: {
      guid: string;
    };
  };
};

export type AllLettersTypes = {
  oficios: {
    pageInfo: {
      offsetPagination: {
        hasMore: boolean;
        hasPrevious: boolean;
        total: number;
      };
    };
    nodes: letterTypes[];
  };
};

export type totalLettersTypes = {
  oficios: {
    pageInfo: {
      offsetPagination: {
        total: number;
      };
    };
  };
};

export type singleLetterTypes = {
  id: string;
  title: string;
  categories: {
    nodes: [
      {
        link: string;
        name: string;
        slug: string;
      }
    ];
  };
  date: string;
  details: {
    briefDescription: string;
    originalFileAuthor: string;
    originalfilecreatedat: string;
    originalFileLink: string;
    transcriber: string;
    transcriptionFileLink: {
      node: {
        guid: string;
        fileSize: number;
      };
    };
  };
};

export type LetterTypes = {
  oficio: singleLetterTypes;
};