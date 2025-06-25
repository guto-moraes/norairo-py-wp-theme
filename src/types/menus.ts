export type menuItemTypes = {
  id: string;
  label: string;
  uri: string;
  parentId: string;
};

export type menuTypes = {
  menuItems: {
    nodes: menuItemTypes[];
  };
};

export type subMenuMainMenuTypes = {
  parentDatabaseId: number;
  databaseId: number;
  label: string;
  uri: string;
};

export type mainMenuSecondNodeTypes = {
  parentDatabaseId: number;
  databaseId: number;
  label: string;
  uri: string;
  childItems: {
    nodes: subMenuMainMenuTypes[];
  };
};

export type mainMenuFirstNodeTypes = {
  menuItems: {
    nodes: mainMenuSecondNodeTypes[];
  };
};

export type mainMenuNew = {
  menus: {
    nodes: mainMenuFirstNodeTypes[];
  };
};
