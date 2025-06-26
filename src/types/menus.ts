export type FooterMenuItemTypes = {
  id: string;
  label: string;
  uri: string;
  parentId: string;
};

export type FooterMenuTypes = {
  menuItems: {
    nodes: FooterMenuItemTypes[];
  };
};

export type SubmenuMainMenuTypes = {
  parentDatabaseId: number;
  databaseId: number;
  label: string;
  uri: string;
};

export type SecondNodeMainMenuTypes = {
  parentDatabaseId: number;
  databaseId: number;
  label: string;
  uri: string;
  childItems: {
    nodes: SubmenuMainMenuTypes[];
  };
};

export type FirstNodeMainMenuTypes = {
  menuItems: {
    nodes: SecondNodeMainMenuTypes[];
  };
};

export type MainMenuTypes = {
  menus: {
    nodes: FirstNodeMainMenuTypes[];
  };
};
