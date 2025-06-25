export type memberTypes = {
  id: string;
  categories: {
    nodes: [
      {
        slug: string;
      }
    ];
  };
  title: string;
  content: string;
  info: {
    e_mail: string;
    socialMedias: socialTypes[];
  };
  featuredImage: {
    node: {
      filePath: string;
      guid: string;
    };
  };
};

export type teamTypes = {
  membros: {
    nodes: memberTypes[];
  };
};

export type socialTypes = {
  socialMediaName: string;
  socialMediaURL: string;
};

export type transcriberPhotoTypes = {
  membro: {
    id: string;
    title: string;
    featuredImage: {
      node: {
        filePath: string;
        guid: string;
      };
    };
  };
};
