const STATUS_ON_Transit = { id: 1, name: "On Transit", color: "blue.300" };
const STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  color: "yellow.400",
};
const STATUS_yetToDeliver = { id: 3, name: "yetToDeliver", color: "pink.300" };
const STATUS_Delivered = { id: 4, name: "Delivered", color: "green.300" };
export const STATUSES = [
  STATUS_ON_Transit,
  STATUS_IN_PROGRESS,
  STATUS_yetToDeliver,
  STATUS_Delivered,
];

const DATA = [
  {
    OrderName: "Chattri",
    status: STATUS_ON_Transit,
    due: new Date("2023/10/15"),
    Productid: "#12345",
  },
  {
    OrderName: "OverPriced Vase",
    status: STATUS_IN_PROGRESS,
    due: null,
    Productid: "#12245",
  },
  {
    OrderName: "Aesthetic Pot",
    status: STATUS_Delivered,
    due: null,
    Productid: "#22344",
  },
  {
    OrderName: ".",
    status: null,
    due: new Date("2023/02/15"),
    Productid: "#18645",
  },
  {
    OrderName: "Moyemoye sunglasses",
    status: STATUS_yetToDeliver,
    due: null,
    Productid: "#12361",
  },
  {
    OrderName: ".",
    status: null,
    due: new Date("2023/09/12"),
    Productid: "#12845",
  },
  {
    OrderName: "wall decor",
    status: STATUS_IN_PROGRESS,
    due: null,
    Productid: "#52345",
  },
 
  {
    OrderName: "",
    status: STATUS_ON_Transit,
    due: new Date("2023/11/08"),
    Productid: "#12245",
  },
 
  {
    OrderName: "WC trophy Sharma never got",
    status: STATUS_IN_PROGRESS,
    due: null,
    Productid: "#11111",
  },


];

export default DATA;
