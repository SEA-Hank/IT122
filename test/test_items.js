import { expect } from "chai";
import { getItem, addItem, deleteItem } from "../data.js";
describe("getItem", () => {
  it("item name should be 'Razer Cynosa Chroma Gaming Keyboard'", () => {
    let item = getItem(1);
    expect(item.name).to.equal("Razer Cynosa Chroma Gaming Keyboard");
  });
  it("item should be no found", () => {
    let item = getItem(15);
    expect(item).to.equal(undefined);
  });
});

describe("addItem", () => {
  it("add item succeeded", () => {
    let status = addItem({
      id: 9,
      name: "Logitech G502 Hero High Performance Gaming Mouse",
      Brand: "Logitech",
      ranking: "5",
      comments: "19,292",
      price: 66.99,
      GET: "Tomorrow, Mar 15",
    });
    expect(status).to.deep.equal({
      succeed: true,
      message: "item added succeeded",
    });
  });

  it("add item failure, item already existed", () => {
    let status = addItem({
      id: 1,
      name: "Razer Cynosa Chroma Gaming Keyboard",
      Brand: "Razer",
      ranking: "4",
      comments: "11,292",
      price: 56.99,
      GET: "Tomorrow, Mar 11",
    });
    expect(status.succeed).to.be.false;
  });
});

describe("deleteItem", () => {
  it("delete item succeeded", () => {
    let status = deleteItem({
      id: 1,
      name: "Razer Cynosa Chroma Gaming Keyboard",
      Brand: "Razer",
      ranking: "4",
      comments: "11,292",
      price: 56.99,
      GET: "Tomorrow, Mar 11",
    });
    expect(status.message).to.equal("delete item succeeded");
  });

  it("delete item unsuccessfully", () => {
    let status = deleteItem({
      id: 1,
      name: "test item",
      Brand: "Razer",
      ranking: "4",
      comments: "11,292",
      price: 56.99,
      GET: "Tomorrow, Mar 12",
    });
    expect(status.succeed).to.be.false;
  });
});
