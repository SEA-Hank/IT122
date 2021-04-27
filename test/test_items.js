import { expect } from "chai";
import { getItem, addItem, deleteItem } from "../data.js";
import { validate, schema } from "./schema.js";
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
    let status = validate(
      {
        id: 9,
        name: "Logitech G502 Hero High Performance Gaming Mouse",
        Brand: "Logitech",
        ranking: 5,
        comments: 19292,
        price: 66.99,
        GET: "Tomorrow, Mar 15",
      },
      addItem
    );
    expect(status).to.deep.equal({
      success: true,
      message: "item added successfully",
    });
  });

  it("add item failure, item already existed", () => {
    let status = validate(
      {
        id: 1,
        name: "Razer Cynosa Chroma Gaming Keyboard",
        Brand: "Razer",
        ranking: 4,
        comments: 11292,
        price: 56.99,
        GET: "Tomorrow, Mar 11",
      },
      addItem
    );
    expect(status.success).to.be.false;
  });
});

describe("deleteItem", () => {
  it("delete item succeeded", () => {
    let status = validate(
      {
        id: 1,
        name: "Razer Cynosa Chroma Gaming Keyboard",
        Brand: "Razer",
        ranking: 4,
        comments: 11292,
        price: 56.99,
        GET: "Tomorrow, Mar 11",
      },
      deleteItem
    );
    expect(status.message).to.equal("delete item successfully");
  });

  it("delete item unsuccessfully", () => {
    let status = validate(
      {
        id: 1,
        name: "test item",
        Brand: "Razer",
        ranking: 4,
        comments: 11292,
        price: 56.99,
        GET: "Tomorrow, Mar 12",
      },
      deleteItem
    );
    expect(status.success).to.be.false;
  });
});

describe("JOI schema validate", () => {
  it("valid data", () => {
    let result = schema.validate({
      id: 1,
      name: "Razer Cynosa Chroma Gaming Keyboard",
      Brand: "Razer",
      ranking: 4,
      comments: 11292,
      price: 56.99,
      GET: "Tomorrow, Mar 11",
    });
    expect(result).to.not.have.own.property("error");
  });
  it("invalid data", () => {
    let result = schema.validate({
      name: "Razer Cynosa Chroma Gaming Keyboard",
    });
    expect(result).to.have.own.property("error");
  });
});
