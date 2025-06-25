import Main from "@/layouts/Main";
import Container from "@/layouts/Container";
import Title from "@/components/Title";
import request from "graphql-request";
import type {
  mainMenuNew,
  mainMenuFirstNodeTypes,
  mainMenuSecondNodeTypes,
  subMenuMainMenuTypes,
} from "@/types/menus";

const BASE_GRAPHQL_URL = import.meta.env.VITE_BASE_GRAPHQL_URL;
import { MainMenu } from "../graphql/menus";
import { useQuery } from "@tanstack/react-query";

const fetchMenu = async () => {
  return await request<mainMenuNew>(BASE_GRAPHQL_URL, MainMenu);
};

const Contact = () => {
  const { data } = useQuery<mainMenuNew>({
    queryKey: ["menu"],
    queryFn: () => fetchMenu(),
  });

  return (
    <Main className="py-10 xl:py-16">
      <Container>
        <Title title="Contato" />

        <ul className="mt-16">
          {data &&
            data.menus.nodes.map((item: mainMenuFirstNodeTypes) => {
              return item.menuItems.nodes.map(
                (subitem: mainMenuSecondNodeTypes) => {
                  if (subitem.childItems.nodes.length > 0) {
                    return (
                      <li className="text-green-500" key={subitem.databaseId}>
                        <>
                          {subitem.label}
                          {
                            <ul>
                              {subitem.childItems.nodes.map(
                                (submenu: subMenuMainMenuTypes) => (
                                  <li
                                    className="text-blue-500"
                                    key={submenu.databaseId}
                                  >
                                    {submenu.label}
                                  </li>
                                )
                              )}
                            </ul>
                          }
                        </>
                      </li>
                    );
                  } else if (subitem.parentDatabaseId === 0) {
                    return (
                      <li className="text-green-500" key={subitem.databaseId}>
                        {subitem.label}
                      </li>
                    );
                  }
                }
              );
            })}
        </ul>
      </Container>
    </Main>
  );
};

export default Contact;
