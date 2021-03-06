let items = [
  {
    id: 1,
    name: "Razer Cynosa Chroma Gaming Keyboard",
    Brand: "Razer",
    ranking: 4,
    comments: 11292,
    price: 56.99,
    GET: "Tomorrow, Mar 11",
  },
  {
    id: 2,
    name: "Razer Ornata Chroma Gaming Keyboard",
    Brand: "Razer",
    ranking: 4,
    comments: 7206,
    price: 79.0,
    GET: "Today, Mar 10",
  },
  {
    id: 3,
    name: "Corsair K100 RGB Mechanical Gaming Keyboard",
    Brand: "Corsair",
    ranking: 5,
    comments: 490,
    price: 199.99,
    GET: "Tomorrow, Mar 11",
  },
  {
    id: 4,
    name: "SteelSeries Apex 7 TKL Compact Mechanical Gaming Keyboard",
    Brand: "SteelSeries",
    ranking: 5,
    comments: 8053,
    price: 124.99,
    GET: "Tomorrow, Mar 12",
  },
  {
    id: 5,
    name: "Corsair Nightsword RGB",
    Brand: "Corsair",
    ranking: 4,
    comments: 2567,
    price: 70,
    GET: "Tomorrow, Mar 14",
  },
  {
    id: 6,
    name: "Corsair M65 RGB Elite",
    Brand: "Corsair",
    ranking: 4,
    comments: 2251,
    price: 49.99,
    GET: "Today, Mar 10",
  },
  {
    id: 7,
    name: "Razer Naga Trinity Gaming Mouse",
    Brand: "Razer",
    ranking: 4,
    comments: 9940,
    price: 70.99,
    GET: "Today, Mar 10",
  },
  {
    id: 8,
    name: "SteelSeries Rival 600 Gaming Mouse",
    Brand: "SteelSeries",
    ranking: 4,
    comments: 5094,
    price: 69.99,
    GET: "Tomorrow, Mar 11",
  },
];

const getAll = () => {
  return items;
};

const getItem = (id) => {
  return items.find((ele) => {
    return ele.id == id;
  });
};

const addItem = (newItem) => {
  let found = items.find((e) => {
    return e.name == newItem.name;
  });
  if (found) {
    return { success: false, message: "item already existed" };
  }
  items.push(newItem);
  return { success: true, message: "item added successfully" };
};

const deleteItem = (item) => {
  let length = items.length;
  items = items.filter((e) => {
    e.name != item.name;
  });
  return {
    success: length != items.length,
    message:
      length != items.length ? "delete item successfully" : "item not found",
  };
};

export { getAll, getItem, addItem, deleteItem };
