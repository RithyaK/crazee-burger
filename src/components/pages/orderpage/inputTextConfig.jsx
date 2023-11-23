import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const inputTextConfig = (product) => [
  {
    id: "0",
    placeholder: "Nom du produit (ex: Super Burger)",
    value: product.title,
    name: "title",
    type: "text",
    Icon: <FaHamburger />,
  },
  {
    id: "1",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    value: product.imageSource,
    name: "imageSource",
    type: "text",
    Icon: <BsFillCameraFill />,
  },
  {
    id: "2",
    placeholder: "Prix",
    value: product.price ? product.price : "",
    name: "price",
    type: "text",
    Icon: <MdOutlineEuro />,
  },
];
