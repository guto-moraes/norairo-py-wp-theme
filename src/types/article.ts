export type articleTypes = {
  id: string;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: {
    node: {
      guid: string;
    };
  };
};

export type allArticlesTypes = {
  posts: {
    pageInfo: {
      offsetPagination: {
        hasMore: boolean;
        hasPrevious: boolean;
        total: number;
      };
    };
    nodes: articleTypes[];
  };
};
