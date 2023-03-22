import { path } from "../static/Router";

const ProductData = [
  {
    key: "coffe",
    link: path.menu + "/coffe",
    value: "cà phê",
    children: [
      {
        key: "coffefin",
        link: path.menu + "/coffe/phin",
        value: "cà phê phin",
      },
      {
        key: "espresso",
        link: path.menu + "/coffe/espresso",
        value: "cà phê espresso",
      },
    ],
  },
  {
    key: "tea",
    link: path.menu + "/tea",
    value: "trà",
    children: [
      {
        key: "trasenvang",
        link: path.menu + "/tea/trasenvang",
        value: "trà sen vàng",
      },
      {
        key: "trathachdao",
        link: path.menu + "/tea/trathachdao",
        value: "trà thạch đào",
      },
    ],
  },
];

export { ProductData };
