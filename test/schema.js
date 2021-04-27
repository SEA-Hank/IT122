import joi from "joi";
const schema = joi.object({
  id: joi.number().integer().required(),
  name: joi.string().max(100).required(),
  Brand: joi.string().max(50).required(),
  ranking: joi.number(),
  comments: joi.number(),
  price: joi.number().required(),
  GET: joi.string(),
});

const validate = (item, fn) => {
  let { error, value } = schema.validate(item);
  if (error) {
    return { success: false, message: "invalid item" };
  }
  return fn(item);
};

export { validate, schema };
