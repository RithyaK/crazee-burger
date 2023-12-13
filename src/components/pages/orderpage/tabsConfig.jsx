import AdminAdd from "./AdminAdd";
import AdminEdit from "./AdminEdit";
import HintMessage from "./HintMessage";

export const tabsConfig = (hasNotBeenClicked) => [
  {
    index: "add",
    title: "Ajouter un produit",
    Content: <AdminAdd />,
  },
  {
    index: "edit",
    title: "modifier un produit",
    Content: hasNotBeenClicked ? <HintMessage /> : <AdminEdit />,
  },
];
