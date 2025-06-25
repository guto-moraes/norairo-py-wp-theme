// import { type Ref, useEffect, useRef, useState } from "react";
// import NavbarLink from "@/components/NavbarLink";
// import { useQueryMainMenu } from "@/queries/menus";
import cn from "@/utils/cn";

// const SubMenuGroup = ({
//   openSubmenu,
//   children,
//   ref,
// }: {
//   openSubmenu: boolean;
//   children: React.ReactNode;
//   ref: Ref<HTMLDivElement | null>;
// }) => {
//   return (
//     <div
//       ref={ref}
//       id="dropdown"
//       className={cn(
//         "bg-primary-800 lg:bg-white/95 lg:shadow-lg lg:rounded-b-md",
//         "transition-transform duration-300 lg:absolute lg:top-12 lg:right-0",
//         "origin-top-left lg:origin-top-right transform-gpu min-w-max w-full",
//         openSubmenu
//           ? "scale-100 p-4 max-h-screen lg:max-h-max mb-1.5 lg:mb-0"
//           : "scale-0 max-h-0"
//       )}
//     >
//       {children}
//     </div>
//   );
// };

const Navigation = ({ showMenu }: { showMenu: boolean }) => {
  // const [openSubmenu, setOpenSubmenu] = useState(false);
  // const dropdown = useRef<HTMLDivElement | null>(null);
  // const trigger = useRef<HTMLButtonElement | null>(null);

  // const { data } = useQueryMainMenu();

  // const handleDropDown = () => {
  //   if (!openSubmenu) {
  //     setOpenSubmenu(true);
  //   } else {
  //     setOpenSubmenu(false);
  //   }
  // };

  // useEffect(() => {
  //   const handleEscCloseDropdown = (event: KeyboardEvent) => {
  //     if (event && openSubmenu === true && event.key === "Escape") {
  //       setOpenSubmenu(false);
  //     }
  //   };

  //   document.addEventListener("keydown", handleEscCloseDropdown);
  //   return () => {
  //     document.removeEventListener("keydown", handleEscCloseDropdown);
  //   };
  // }, [openSubmenu]);

  // // close on click outside
  // useEffect(() => {
  //   const clickHandler = (event: MouseEvent) => {
  //     const target = event.target as Node;
  //     if (!dropdown.current) return;
  //     if (
  //       !openSubmenu ||
  //       dropdown.current.contains(target) ||
  //       (trigger.current && trigger.current.contains(target))
  //     )
  //       return;
  //     setOpenSubmenu(false);
  //   };
  //   document.addEventListener("click", clickHandler);
  //   return () => document.removeEventListener("click", clickHandler);
  // });

// interface HierarchicalItem {
//   key: string | number;
//   parentId?: string | number;
//   label: string;
//   uri?: string;
//   children: HierarchicalItem[];
//   [key: string]: unknown;
// }

// const menu = (
//     data = [],
//     {idKey='key',parentKey='parentId',childrenKey='children'} = {}
// ) => {
//     const tree: HierarchicalItem[] = [];
//     const childrenOf: Record<string | number, HierarchicalItem[]> = {};
//     data.forEach((item) => {
//         if (
//             item &&
//             typeof item === "object" &&
//             !Array.isArray(item) &&
//             Object.prototype.toString.call(item) === "[object Object]"
//         ) {
//             const newItem = { ...item };
//             const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
//             childrenOf[id] = childrenOf[id] || [];
//             newItem[childrenKey] = childrenOf[id];
//             if (parentId) {
//                 childrenOf[parentId] = childrenOf[parentId] || [];
//                 childrenOf[parentId].push(newItem);
//             } else {
//                 tree.push(newItem);
//             }
//         }
//     });
//     return tree;
// };

  return (
    <ul
      className={cn(
        "bg-primary-700 lg:bg-transparent py-3 px-6 lg:px-0 flex flex-col gap-3.5",
        "lg:flex-row justify-start lg:justify-end items-start lg:items-center",
        "lg:gap-4 max-lg:z-30 max-lg:h-screen w-full max-w-72 min-w-max max-lg:absolute",
        "max-lg:top-20 max-lg:right-0 max-lg:pt-6 transition-transform duration-300",
        showMenu ? "max-lg:translate-x-0" : "max-lg:translate-x-200"
      )}
    >
      {/* {data &&
        menu(data?.menuItems.nodes).map((item: HierarchicalItem) => {
          if (item.children.length !== 0) {
            return (
              <li className="relative top-0.5" key={item.key}>
                <NavbarLink
                  label={item.label}
                  isSubmenu={true}
                  dropdown={handleDropDown}
                  isOpen={openSubmenu}
                  ref={trigger}
                />
                <SubMenuGroup openSubmenu={openSubmenu} ref={dropdown}>
                  <ul className="flex flex-col gap-y-1.5">
                    {item.children.map((item: HierarchicalItem) => {
                      return (
                        <li key={item.key}>
                          <NavbarLink
                            url={item.uri}
                            title={item.label}
                            label={item.label}
                            className="text-md"
                            isSubmenu={false}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </SubMenuGroup>
              </li>
            );
          }
          return (
            <li key={item.key}>
              <NavbarLink
                url={item.uri}
                title={item.label}
                label={item.label}
                isSubmenu={false}
              />
            </li>
          );
        })} */}
    </ul>
  );
};

export default Navigation;
