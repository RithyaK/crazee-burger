import AdminAdd from "./AdminAdd";
import AdminEdit from "./AdminEdit";

export const tabsConfig = [
  {
    index: "add",
    title: "Ajouter un produit",
    Content: <AdminAdd />,
  },
  {
    index: "edit",
    title: "modifier un produit",
    Content: <AdminEdit />,
  },
];
